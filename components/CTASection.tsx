'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-primary via-asphalt/50 to-primary overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-secondary/5 to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,150,0.08),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('/bg-home.png')] bg-cover bg-center blur-3xl scale-150" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-6 tracking-tight">
            Prêt à rouler ensemble ?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Rejoignez des milliers de passionnés et partez à l'aventure
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-12 py-6 bg-secondary hover:bg-secondary/90 text-primary font-extrabold rounded-xl transition-all duration-300 shadow-[0_20px_60px_rgba(0,200,150,0.3)] hover:shadow-[0_25px_80px_rgba(0,200,150,0.4)] text-lg md:text-xl border-2 border-secondary/20 hover:border-secondary/40 backdrop-blur-sm"
            >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.88-.78-3.24-1.99-4.13-3.73C5.24 13.8 4 11.57 4 9.54c0-2.02.62-3.83 1.88-5.44C6.84 2.8 8.43 2 10.27 2c.95 0 1.78.17 2.49.52.71.35 1.3.85 1.78 1.5.48-.65 1.07-1.15 1.78-1.5.71-.35 1.54-.52 2.49-.52 1.84 0 3.43.8 4.39 2.1 1.26 1.71 1.88 3.42 1.88 5.44 0 2.03-1.24 4.26-3.22 6.97-.89 1.74-2.25 2.95-4.13 3.73-1.16.48-2.15.94-3.24 1.44-.56.26-1.13.4-1.71.4-.45 0-.9-.07-1.35-.22z" />
                </svg>
                Télécharger l'application
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-12 py-6 bg-light/5 backdrop-blur-md border-2 border-secondary/40 hover:border-secondary/60 hover:bg-light/10 text-light font-bold rounded-xl transition-all duration-300 text-lg md:text-xl shadow-xl hover:shadow-2xl"
            >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Rejoindre la communauté
              </motion.a>
            </div>
            <motion.a
              href="#features"
              whileHover={{ y: -2 }}
              className="inline-flex items-center justify-center px-8 py-3 text-text-secondary hover:text-light text-sm md:text-base font-semibold transition-all duration-300 mt-6 group"
            >
              Voir comment ça fonctionne
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

