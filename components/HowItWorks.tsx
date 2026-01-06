'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '1',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Crée ton profil',
    description: 'Moto / Auto / Les deux',
  },
  {
    number: '2',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Trouve ou crée une balade',
    description: 'Explorez les sorties près de chez vous',
  },
  {
    number: '3',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Rejoins un groupe',
    description: 'Connectez-vous avec d\'autres passionnés',
  },
  {
    number: '4',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Roule ensemble',
    description: '🚀 Partez à l\'aventure !',
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative h-full flex w-full"
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.03 }}
        className="relative bg-gradient-to-br from-asphalt via-asphalt/95 to-primary/90 p-8 md:p-10 pt-14 rounded-3xl border-2 border-secondary/30 hover:border-secondary/60 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,200,150,0.15)] shadow-2xl backdrop-blur-sm text-center overflow-visible group h-full flex flex-col min-h-[280px] md:min-h-0 w-full"
      >
        {/* Premium glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
        
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center text-primary font-extrabold text-2xl shadow-[0_10px_30px_rgba(0,200,150,0.4)] border-2 border-secondary/50 z-20"
        >
          {step.number}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          className="text-secondary mb-6 flex justify-center drop-shadow-[0_0_15px_rgba(0,200,150,0.4)] flex-shrink-0"
        >
          {step.icon}
        </motion.div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-light mb-3 tracking-tight flex-shrink-0 break-words">{step.title}</h3>
        <p className="text-text-secondary text-sm md:text-base lg:text-lg font-light flex-grow flex items-center justify-center break-words">{step.description}</p>
      </motion.div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-primary via-asphalt/30 to-primary overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,150,0.04),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('/bg-home.png')] bg-cover bg-center blur-3xl scale-150" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-6 tracking-tight">
            Comment ça marche ?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
            Rejoignez la communauté en 4 étapes simples
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

