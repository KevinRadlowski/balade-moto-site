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
            className="bg-asphalt/80 backdrop-blur-sm p-8 rounded-2xl border border-secondary/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
              Pourquoi RideTogether ?
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p className="text-lg leading-relaxed">
                RideTogether est né d'une passion commune pour les balades à moto et en voiture.
                Nous avons constaté qu'il manquait une plateforme dédiée permettant aux passionnés
                de se retrouver, d'organiser des sorties et de partager leurs expériences.
              </p>
              <p className="text-lg leading-relaxed">
                Notre mission est de créer une communauté soudée où chaque motard et automobiliste
                peut trouver des compagnons de route, découvrir de nouveaux itinéraires et vivre
                des aventures inoubliables.
              </p>
              <p className="text-xl font-bold text-secondary mt-6 italic">
                "RideTogether n'est pas une app. C'est un point de départ."
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
            <div className="bg-asphalt/80 backdrop-blur-sm p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-colors">
              <h3 className="text-2xl font-semibold text-light mb-3 flex items-center">
                <span className="text-secondary mr-3 text-2xl">✓</span>
                Mieux organiser vos sorties
              </h3>
              <p className="text-text-secondary">
                Planifiez vos balades en quelques clics, invitez vos amis et gérez tous les détails
                depuis une seule application.
              </p>
            </div>

            <div className="bg-asphalt/80 backdrop-blur-sm p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-colors">
              <h3 className="text-2xl font-semibold text-light mb-3 flex items-center">
                <span className="text-secondary mr-3 text-2xl">✓</span>
                Une communauté active
              </h3>
              <p className="text-text-secondary">
                Rejoignez des milliers de passionnés partout en France et échangez avec eux sur
                vos expériences et vos projets de balades.
              </p>
            </div>

            <div className="bg-asphalt/80 backdrop-blur-sm p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-colors">
              <h3 className="text-2xl font-semibold text-light mb-3 flex items-center">
                <span className="text-secondary mr-3 text-2xl">✓</span>
                Partage d'itinéraires
              </h3>
              <p className="text-text-secondary">
                Découvrez les meilleurs itinéraires partagés par la communauté et partagez vos
                propres découvertes.
              </p>
            </div>

            <div className="bg-asphalt/80 backdrop-blur-sm p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-colors">
              <h3 className="text-2xl font-semibold text-light mb-3 flex items-center">
                <span className="text-secondary mr-3 text-2xl">✓</span>
                Votre Garage
              </h3>
              <p className="text-text-secondary">
                Gérez vos véhicules et suivez vos sorties directement depuis votre garage. 
                Choisissez votre moto ou voiture pour chaque balade et consultez l'historique de vos trajets.
              </p>
            </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
            Qui sommes-nous ?
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-text-secondary bg-asphalt/60 backdrop-blur-sm p-8 rounded-2xl border border-secondary/20">
            <p className="text-lg">
              RideTogether a été créé par une équipe de passionnés de moto et d'automobile qui
              souhaitent faciliter les rencontres et l'organisation de balades entre amateurs.
            </p>
            <p className="text-lg">
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

