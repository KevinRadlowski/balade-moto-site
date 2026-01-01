import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Rate limiting simple en mémoire (max 5 messages/heure par IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 heure en millisecondes

function getClientIP(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded
    ? (Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0])
    : req.socket.remoteAddress || 'unknown';
  return ip.trim();
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // Nouvelle fenêtre ou fenêtre expirée
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string, maxLength: number): string {
  return input.trim().slice(0, maxLength);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Seulement POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Vérification des variables d'environnement
    const emailHost = process.env.EMAIL_HOST;
    const emailPort = process.env.EMAIL_PORT;
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailFrom = process.env.EMAIL_FROM;
    const contactTo = process.env.CONTACT_TO;

    if (!emailHost || !emailPort || !emailUser || !emailPass || !emailFrom || !contactTo) {
      console.error('Missing email configuration');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Récupération des données
    const { name, email, message, website } = req.body;

    // Honeypot : si le champ "website" est rempli, c'est un bot
    if (website && website.trim() !== '') {
      return res.status(400).json({ error: 'Invalid request' });
    }

    // Validation des champs obligatoires
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
    }

    // Validation de l'email
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Email invalide' });
    }

    // Sanitization et limites
    const sanitizedName = sanitizeInput(name, 100);
    const sanitizedEmail = sanitizeInput(email, 255);
    const sanitizedMessage = sanitizeInput(message, 5000);

    if (sanitizedName.length < 2) {
      return res.status(400).json({ error: 'Le nom doit contenir au moins 2 caractères' });
    }

    if (sanitizedMessage.length < 10) {
      return res.status(400).json({ error: 'Le message doit contenir au moins 10 caractères' });
    }

    // Rate limiting
    const clientIP = getClientIP(req);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return res.status(429).json({
        error: 'Trop de messages envoyés. Veuillez réessayer dans une heure.',
      });
    }

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: parseInt(emailPort, 10),
      secure: false, // true pour 465, false pour autres ports
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Récupération du user agent
    const userAgent = req.headers['user-agent'] || 'Unknown';

    // Date et heure
    const now = new Date();
    const dateTime = now.toLocaleString('fr-FR', {
      dateStyle: 'full',
      timeStyle: 'long',
    });

    // Préparation de l'email
    const mailOptions = {
      from: emailFrom,
      to: contactTo,
      subject: `[RideTogether - Contact] ${sanitizedName} - ${sanitizedEmail}`,
      text: `
Nouveau message depuis le formulaire de contact RideTogether

Nom: ${sanitizedName}
Email: ${sanitizedEmail}
Date/Heure: ${dateTime}
User Agent: ${userAgent}

Message:
${sanitizedMessage}

---
Cet email a été envoyé depuis le formulaire de contact du site RideTogether.
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00C896;">Nouveau message depuis le formulaire de contact RideTogether</h2>
          
          <div style="background: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Date/Heure:</strong> ${dateTime}</p>
            <p><strong>User Agent:</strong> ${userAgent}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #00C896; margin: 20px 0;">
            <h3 style="color: #1A1F26;">Message:</h3>
            <p style="white-space: pre-wrap; color: #333;">${sanitizedMessage.replace(/\n/g, '<br>')}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Cet email a été envoyé depuis le formulaire de contact du site RideTogether.
          </p>
        </div>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Message envoyé avec succès',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      error: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.',
    });
  }
}

