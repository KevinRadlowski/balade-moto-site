'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    id: 'organize',
    title: 'Organiser & Rouler',
    tagline: 'Crée une balade en 30 secondes',
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
    tagline: 'Discute avec ton groupe avant le départ',
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
    tagline: 'Choisis ton véhicule et roule',
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
    tagline: 'Retrouve tes balades passées',
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
    tagline: 'Gère tes véhicules et suivez tes sorties',
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
      className="group relative"
    >
      <div className={`
        relative bg-gradient-to-br from-asphalt to-primary/80 
        p-8 rounded-2xl border-2 transition-all duration-500
        ${pillar.featured 
          ? 'border-secondary/60 hover:border-secondary shadow-2xl shadow-secondary/20' 
          : 'border-secondary/20 hover:border-secondary/40 shadow-xl'
        }
        hover:shadow-2xl hover:shadow-secondary/10
        overflow-hidden
      `}>
        {/* Background texture effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/bg-home.png')] bg-cover bg-center blur-2xl scale-150" />
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-secondary group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                {pillar.featured && (
                  <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full border border-secondary/40">
                    NOUVEAU
                  </span>
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-light mb-2">
                {pillar.title}
              </h3>
              <p className="text-secondary font-medium text-sm md:text-base">
                {pillar.tagline}
              </p>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-3 mt-6">
            {pillar.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                className="flex items-center gap-3 text-text-secondary group-hover:text-light transition-colors"
              >
                <span className="text-lg">{feature.icon}</span>
                <span className="text-sm md:text-base">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-primary via-asphalt to-primary overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/bg-home.png')] bg-cover bg-center blur-3xl scale-150" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-4">
            Fonctionnalités principales
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Tout ce dont vous avez besoin pour organiser et partager vos meilleures balades
          </p>
        </motion.div>

        {/* Grid des 5 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={pillar.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <PillarCard pillar={pillar} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
