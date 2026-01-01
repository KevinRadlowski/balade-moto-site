'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const screenshots = [
  {
    src: '/mockups/screen1.png',
    alt: 'Capture d\'écran - Accueil RideTogether',
    title: 'Accueil',
    label: 'Mon garage',
    description: 'Votre tableau de bord personnalisé avec vos prochaines balades et groupes.',
    featured: false,
  },
  {
    src: '/mockups/screen3.png',
    alt: 'Capture d\'écran - Groupes et discussions RideTogether',
    title: 'Groupes & Discussions',
    label: 'Mes groupes',
    description: 'Rejoignez des groupes publics ou privés et discutez en temps réel avec la communauté.',
    featured: false,
  },
  {
    src: '/mockups/screen2.png',
    alt: 'Capture d\'écran - Profil RideTogether',
    title: 'Profil',
    label: 'Mon garage',
    description: 'Gérez votre profil, vos préférences et vos paramètres en toute simplicité.',
    featured: false,
  },
  {
    src: '/mockups/screen4.png',
    alt: 'Capture d\'écran - Balades RideTogether',
    title: 'Balades',
    label: 'Mes balades',
    description: 'Découvrez, créez et organisez vos balades avec des itinéraires détaillés.',
    featured: true,
  },
];

function ScreenshotCard({ 
  screenshot, 
  index, 
  isFeatured = false 
}: { 
  screenshot: typeof screenshots[0]; 
  index: number;
  isFeatured?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative group"
      >
        <div className={`relative rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_100px_rgba(0,200,150,0.2)] transition-all duration-500 border-2 backdrop-blur-sm h-[600px] md:h-[550px] lg:h-[600px] ${
          isFeatured 
            ? 'border-secondary/60 bg-gradient-to-br from-asphalt to-primary/90' 
            : 'border-secondary/30 hover:border-secondary/50 bg-gradient-to-br from-asphalt to-asphalt/95'
        }`}>
          {/* Premium inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent pointer-events-none" />
          
          {hasError ? (
            <div className="w-full h-full flex items-center justify-center bg-asphalt border-2 border-dashed border-secondary/30 rounded-3xl">
              <p className="text-text-secondary text-center px-4">
                Image à ajouter
                <br />
                <span className="text-sm">{screenshot.src}</span>
              </p>
            </div>
          ) : (
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              className="object-contain bg-transparent"
              onError={() => setHasError(true)}
            />
          )}
          
          {/* Premium overlay effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-3xl border border-secondary/20 pointer-events-none" />
        </div>
        
        {/* Premium badge for featured */}
        {isFeatured && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10"
          >
            <div className="bg-gradient-to-r from-secondary to-secondary/80 text-primary px-5 py-2 rounded-full text-xs font-extrabold shadow-[0_10px_30px_rgba(0,200,150,0.4)] border-2 border-secondary/50 backdrop-blur-sm">
              ✨ Mise en avant
            </div>
          </motion.div>
        )}
      </motion.div>
      
      {/* Description */}
      <div className="mt-8 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block px-4 py-2 bg-gradient-to-r from-secondary/25 to-secondary/10 text-secondary text-xs font-extrabold rounded-full border-2 border-secondary/40 mb-4 shadow-lg shadow-secondary/10 backdrop-blur-sm"
        >
          {screenshot.label}
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-light mb-3 tracking-tight">
          {screenshot.title}
        </h3>
        <p className="text-text-secondary text-base md:text-lg max-w-md mx-auto leading-relaxed font-light">
          {screenshot.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Screenshots() {
  return (
    <section className="py-24 bg-gradient-to-b from-asphalt via-primary/50 to-asphalt relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,150,0.05),transparent_70%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-6 tracking-tight">
            Découvrez l'application
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
            Une interface intuitive et moderne pour organiser vos balades
          </p>
        </motion.div>

        {/* All 4 screenshots on one line in desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-8">
          {screenshots.map((screenshot, index) => (
            <ScreenshotCard
              key={index}
              screenshot={screenshot}
              index={index}
              isFeatured={screenshot.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

