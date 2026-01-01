'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-primary overflow-hidden">
      {/* Background visual effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/bg-home.png')] bg-cover bg-center blur-3xl scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-asphalt/90 via-asphalt/80 to-primary/90 backdrop-blur-md p-10 rounded-3xl border-2 border-secondary/30 shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-6 tracking-tight">
              Pourquoi RideTogether ?
            </h2>
            <div className="space-y-6 text-text-secondary">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                RideTogether est né d'une passion commune pour les balades à moto et en voiture.
                Nous avons constaté qu'il manquait une plateforme dédiée permettant aux passionnés
                de se retrouver, d'organiser des sorties et de partager leurs expériences.
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-light">
                Notre mission est de créer une communauté soudée où chaque motard et automobiliste
                peut trouver des compagnons de route, découvrir de nouveaux itinéraires et vivre
                des aventures inoubliables.
              </p>
              <div className="relative mt-8 p-6 rounded-2xl bg-gradient-to-r from-secondary/10 via-secondary/5 to-transparent border-l-4 border-secondary">
                <p className="text-2xl md:text-3xl font-extrabold text-secondary italic leading-tight">
                  "RideTogether n'est pas une app. C'est un point de départ."
                </p>
              </div>
              <p className="text-lg md:text-xl leading-relaxed mt-6 text-text-secondary font-light">
                RideTogether, c'est aussi votre garage personnel, au cœur de votre expérience. 
                Gérez vos véhicules, suivez vos sorties et partagez votre passion avec une communauté 
                qui comprend ce que signifie rouler.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-gradient-to-br from-asphalt/90 to-asphalt/70 backdrop-blur-md p-8 rounded-2xl border-2 border-secondary/30 hover:border-secondary/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-secondary/10"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-light mb-4 flex items-center">
                <span className="text-secondary mr-4 text-3xl drop-shadow-[0_0_10px_rgba(0,200,150,0.4)]">✓</span>
                Mieux organiser vos sorties
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
                Planifiez vos balades en quelques clics, invitez vos amis et gérez tous les détails
                depuis une seule application.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-gradient-to-br from-asphalt/90 to-asphalt/70 backdrop-blur-md p-8 rounded-2xl border-2 border-secondary/30 hover:border-secondary/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-secondary/10"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-light mb-4 flex items-center">
                <span className="text-secondary mr-4 text-3xl drop-shadow-[0_0_10px_rgba(0,200,150,0.4)]">✓</span>
                Une communauté active
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
                Rejoignez des milliers de passionnés partout en France et échangez avec eux sur
                vos expériences et vos projets de balades.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-gradient-to-br from-asphalt/90 to-asphalt/70 backdrop-blur-md p-8 rounded-2xl border-2 border-secondary/30 hover:border-secondary/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-secondary/10"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-light mb-4 flex items-center">
                <span className="text-secondary mr-4 text-3xl drop-shadow-[0_0_10px_rgba(0,200,150,0.4)]">✓</span>
                Partage d'itinéraires
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
                Découvrez les meilleurs itinéraires partagés par la communauté et partagez vos
                propres découvertes.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-gradient-to-br from-secondary/20 via-secondary/10 to-asphalt/90 backdrop-blur-md p-8 rounded-2xl border-2 border-secondary/50 hover:border-secondary shadow-2xl hover:shadow-[0_20px_60px_rgba(0,200,150,0.2)] transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-light mb-4 flex items-center">
                <span className="text-secondary mr-4 text-3xl drop-shadow-[0_0_15px_rgba(0,200,150,0.5)]">✓</span>
                Votre Garage
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
                Gérez vos véhicules et suivez vos sorties directement depuis votre garage. 
                Choisissez votre moto ou voiture pour chaque balade et consultez l'historique de vos trajets.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Qui sommes-nous */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-8 tracking-tight">
            Qui sommes-nous ?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-text-secondary bg-gradient-to-br from-asphalt/80 via-asphalt/70 to-primary/90 backdrop-blur-md p-12 rounded-3xl border-2 border-secondary/30 shadow-2xl">
            <p className="text-lg md:text-xl leading-relaxed font-light">
              RideTogether a été créé par une équipe de passionnés de moto et d'automobile qui
              souhaitent faciliter les rencontres et l'organisation de balades entre amateurs.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-light">
              Notre vision est de devenir la référence en France pour tous ceux qui partagent notre
              passion des deux-roues et des quatre-roues, en créant une plateforme intuitive,
              sécurisée et conviviale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

