'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    id: 'organize',
    title: 'Organiser & Rouler',
    tagline: 'Trouve une balade qui te ressemble.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    features: [
      { text: 'Recherche de balades', icon: '🔍' },
      { text: 'Planification simple (date/heure)', icon: '📅' },
      { text: 'Itinéraires (import/partage)', icon: '🗺️' },
      { text: 'Filtres (distance, véhicule)', icon: '⚙️' },
    ],
  },
  {
    id: 'community',
    title: 'Communauté',
    tagline: 'Tu ne roules plus jamais seul.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: [
      { text: 'Groupes publics/privés', icon: '👥' },
      { text: 'Invitations', icon: '✉️' },
      { text: 'Discussions par groupe', icon: '💬' },
      { text: 'Discussions par balade', icon: '🗨️' },
    ],
  },
  {
    id: 'on-road',
    title: 'Sur la route',
    tagline: "Tout ce qu'il faut, au bon moment.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    features: [
      { text: 'Navigation / itinéraire', icon: '🧭' },
      { text: 'Partage du point de départ', icon: '📍' },
      { text: 'Informations utiles (lieu, rendez-vous)', icon: 'ℹ️' },
      { text: 'Rechercher depuis un autre lieu', icon: '🔎' },
    ],
  },
  {
    id: 'quality',
    title: 'Qualité & Confiance',
    tagline: 'Des balades recommandées par la communauté.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    features: [
      { text: 'Likes sur les balades', icon: '❤️' },
      { text: 'Notation après balade', icon: '⭐' },
      { text: 'Commentaires / retours', icon: '💭' },
      { text: 'Balades mises en avant', icon: '✨' },
    ],
  },
  {
    id: 'garage',
    title: 'Votre Garage',
    tagline: 'Votre passion commence dans votre garage.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: [
      { text: 'Ajouter ses véhicules (moto / voiture)', icon: '🏍️' },
      { text: 'Plusieurs véhicules possibles', icon: '🚗' },
      { text: 'Sélection du véhicule pour une balade', icon: '✅' },
      { text: 'Historique des balades par véhicule', icon: '📊' },
    ],
    featured: true,
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full flex"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className={`
        relative bg-gradient-to-br from-asphalt via-asphalt/95 to-primary/90 
        p-10 rounded-3xl border-2 transition-all duration-500 backdrop-blur-sm
        flex flex-col h-full
        ${pillar.featured 
          ? 'border-secondary/70 hover:border-secondary shadow-[0_20px_60px_rgba(0,200,150,0.15)] hover:shadow-[0_25px_80px_rgba(0,200,150,0.25)]' 
          : 'border-secondary/30 hover:border-secondary/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,200,150,0.1)]'
        }
        overflow-hidden
      `}>
        {/* Premium background texture effect */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[url('/bg-home.png')] bg-cover bg-center blur-3xl scale-150" />
        </div>
        
        {/* Animated glow effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute inset-0 bg-gradient-to-br ${
            pillar.featured 
              ? 'from-secondary/20 via-secondary/5 to-transparent' 
              : 'from-secondary/10 via-transparent to-transparent'
          } rounded-3xl`}
        />
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
        
        {/* Subtle inner border glow */}
        <div className="absolute inset-0 rounded-3xl border border-secondary/10 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="text-secondary drop-shadow-[0_0_15px_rgba(0,200,150,0.4)] transition-transform duration-300"
                >
                  {pillar.icon}
                </motion.div>
                {pillar.featured && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    className="px-4 py-1.5 bg-gradient-to-r from-secondary/30 to-secondary/10 text-secondary text-xs font-extrabold rounded-full border-2 border-secondary/50 shadow-lg shadow-secondary/20 backdrop-blur-sm"
                  >
                    ✨ NOUVEAU
                  </motion.span>
                )}
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-light mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-secondary font-semibold text-base md:text-lg leading-relaxed">
                {pillar.tagline}
              </p>
            </div>
          </div>

          {/* Features list - alignée en bas avec mt-auto */}
          <div className="space-y-4 mt-auto">
            {pillar.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 text-text-secondary group-hover:text-light transition-all duration-300 p-3 rounded-lg group-hover:bg-secondary/5"
              >
                <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(0,200,150,0.3)]">{feature.icon}</span>
                <span className="text-base md:text-lg font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-gradient-to-b from-primary via-asphalt/80 to-primary overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[url('/bg-home.png')] bg-cover bg-center blur-3xl scale-150" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,200,150,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,200,150,0.03),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-6 tracking-tight">
            L'expérience RideTogether
            <br />
            <span className="text-secondary drop-shadow-[0_0_30px_rgba(0,200,150,0.3)]">en 5 piliers</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-light">
            Tout ce dont vous avez besoin pour organiser et partager vos meilleures balades
          </p>
        </motion.div>

        {/* Grid des 5 piliers - Grille fluide auto-fit pour éviter les colonnes vides */}
        <div className="grid gap-6 lg:gap-8 items-stretch grid-cols-1 md:[grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(350px,1fr))] max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            return (
              <div
                key={pillar.id}
                className="flex"
              >
                <PillarCard pillar={pillar} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
