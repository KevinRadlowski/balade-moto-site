'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-asphalt to-primary">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[url('/bg-home.png')] bg-cover bg-center scale-105" />
      </div>
      
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(15,18,22,0.6)_100%)]" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
      
      {/* Gradient bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-asphalt via-asphalt/80 to-transparent" />
      
      {/* Premium glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto mb-12">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-2xl" />
            </motion.div>
            <div className="relative w-full h-full drop-shadow-2xl">
              <Image
                src="/logo.png"
                alt="RideTogether Logo"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(0,200,150,0.3)]"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 text-balance leading-tight tracking-tight"
        >
          RideTogether : Rejoignez la communauté des{' '}
          <span className="text-secondary drop-shadow-[0_0_20px_rgba(0,200,150,0.5)]">passionnés</span> de balades moto et
          auto
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-light mb-4 max-w-3xl mx-auto font-medium"
        >
          Organisez, partagez, discutez vos trajets en toute liberté.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
        >
          Trouvez votre véhicule, votre groupe, votre prochaine route.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-10 py-5 bg-secondary hover:bg-secondary/90 text-primary font-extrabold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(0,200,150,0.4)] shadow-secondary/40 border-2 border-secondary/20 hover:border-secondary/40 backdrop-blur-sm"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.88-.78-3.24-1.99-4.13-3.73C5.24 13.8 4 11.57 4 9.54c0-2.02.62-3.83 1.88-5.44C6.84 2.8 8.43 2 10.27 2c.95 0 1.78.17 2.49.52.71.35 1.3.85 1.78 1.5.48-.65 1.07-1.15 1.78-1.5.71-.35 1.54-.52 2.49-.52 1.84 0 3.43.8 4.39 2.1 1.26 1.71 1.88 3.42 1.88 5.44 0 2.03-1.24 4.26-3.22 6.97-.89 1.74-2.25 2.95-4.13 3.73-1.16.48-2.15.94-3.24 1.44-.56.26-1.13.4-1.71.4-.45 0-.9-.07-1.35-.22z" />
              </svg>
              App Store
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-10 py-5 bg-light/5 backdrop-blur-md border-2 border-light/20 hover:bg-light/10 hover:border-light/40 text-light font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.19,15.12L14.54,12.85L17.19,10.81L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Play Store
            </motion.a>
          </div>
          <motion.a
            href="#features"
            whileHover={{ y: -2 }}
            className="inline-flex items-center justify-center px-6 py-3 text-light/70 hover:text-light text-sm font-semibold transition-all duration-300 mt-4 group"
          >
            Découvrir l'application
            <svg className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

