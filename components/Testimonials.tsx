'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Marc Dubois',
    role: 'Motard passionné',
    badge: 'Moto',
    avatar: '👨‍🦱',
    text: "RideTogether a complètement changé ma façon d'organiser mes balades. Je rencontre régulièrement de nouveaux motards et découvre des itinéraires incroyables !",
    rating: 5,
  },
  {
    name: 'Sophie Martin',
    role: 'Automobiliste',
    badge: 'Auto',
    avatar: '👩‍🦰',
    text: "L'application est intuitive et la communauté est vraiment sympa. J'ai organisé plusieurs sorties avec des personnes que je n'aurais jamais rencontrées autrement.",
    rating: 5,
  },
  {
    name: 'Thomas Leroy',
    role: 'Moto & Auto',
    badge: 'Moto & Auto',
    avatar: '👨‍🦳',
    text: 'Enfin une app qui réunit motards et automobilistes ! Le système de groupes et de chat est parfait pour coordonner nos sorties.',
    rating: 5,
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: typeof testimonials[0];
}) {
  return (
    <div className="bg-gradient-to-br from-asphalt via-asphalt/95 to-primary/90 p-8 md:p-10 rounded-3xl border-2 border-secondary/30 hover:border-secondary/60 transition-all duration-500 shadow-2xl hover:shadow-[0_25px_60px_rgba(0,200,150,0.15)] backdrop-blur-sm w-full mx-auto max-w-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-secondary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="px-4 py-1.5 bg-gradient-to-r from-secondary/30 to-secondary/10 text-secondary text-xs font-extrabold rounded-full border-2 border-secondary/40 shadow-lg backdrop-blur-sm">
          {testimonial.badge}
        </span>
      </div>
      <p className="text-light mb-8 italic leading-relaxed text-lg md:text-xl font-light">"{testimonial.text}"</p>
      <div className="flex items-center pt-4 border-t border-secondary/20">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center text-3xl mr-4 border-2 border-secondary/40 shadow-lg backdrop-blur-sm">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-extrabold text-light text-lg">{testimonial.name}</p>
          <p className="text-sm md:text-base text-text-secondary font-light">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    // Reprendre l'auto-play après 10 secondes d'inactivité
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 bg-gradient-to-b from-primary via-asphalt/30 to-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-6 tracking-tight">
            Ils roulent avec nous
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            Des motards et automobilistes qui partagent leur passion et leurs routes
          </p>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-full border-2 border-secondary/30">
            <p className="text-lg md:text-xl text-secondary font-bold italic">
              "La route est meilleure à plusieurs."
            </p>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              prevTestimonial();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 10000);
            }}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 border-2 border-secondary/40 hover:border-secondary/60 text-secondary hover:text-light transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,200,150,0.3)] flex items-center justify-center backdrop-blur-sm group"
            aria-label="Témoignage précédent"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => {
              nextTestimonial();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 10000);
            }}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 border-2 border-secondary/40 hover:border-secondary/60 text-secondary hover:text-light transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,200,150,0.3)] flex items-center justify-center backdrop-blur-sm group"
            aria-label="Témoignage suivant"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="relative h-[500px] md:h-[450px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-3 h-3 bg-secondary shadow-[0_0_15px_rgba(0,200,150,0.5)]'
                    : 'w-2 h-2 bg-secondary/40 hover:bg-secondary/60'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

