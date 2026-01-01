'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Honeypot field
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          website: formData.website, // Honeypot
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }

      setStatus('success');
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        message: '',
        website: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Erreur, réessayez plus tard'
      );
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-asphalt p-8 rounded-xl shadow-lg border border-secondary/20"
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-light font-semibold mb-2">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-light placeholder:text-text-secondary"
          placeholder="Votre nom"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-light font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-light placeholder:text-text-secondary"
          placeholder="votre@email.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-light font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all resize-none text-light placeholder:text-text-secondary"
          placeholder="Votre message..."
          disabled={status === 'loading'}
        />
      </div>

      {/* Honeypot field - invisible pour les humains */}
      <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Messages de statut */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-4 p-4 bg-secondary/20 border border-secondary/50 rounded-lg"
          >
            <p className="text-secondary font-semibold text-center">
              ✓ Message envoyé avec succès !
            </p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
          >
            <p className="text-red-400 font-semibold text-center">
              {errorMessage || 'Erreur, réessayez plus tard'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={status !== 'loading' ? { scale: 1.05 } : {}}
        whileTap={status !== 'loading' ? { scale: 0.95 } : {}}
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-secondary hover:bg-secondary/80 disabled:bg-secondary/50 disabled:cursor-not-allowed text-primary font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl shadow-secondary/30"
      >
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
      </motion.button>
    </motion.form>
  );
}

