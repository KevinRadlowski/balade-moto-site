'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-secondary/5" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-light mb-6">
            Prêt à rouler ensemble ?
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Rejoignez des milliers de passionnés et partez à l'aventure
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-5 bg-secondary hover:bg-secondary/80 text-primary font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl shadow-secondary/30 text-lg"
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
              className="inline-flex items-center justify-center px-10 py-5 bg-light/10 backdrop-blur-sm border-2 border-secondary/50 hover:bg-light/20 text-light font-semibold rounded-lg transition-all duration-300 text-lg"
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
        </motion.div>
      </div>
    </section>
  );
}

