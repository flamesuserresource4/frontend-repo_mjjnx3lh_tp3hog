import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="discover" className="relative">
      {/* Interactive Spline background */}
      <div className="relative h-[520px] sm:h-[600px]">
        <Spline
          scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient to ensure text readability; non-blocking */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/0 dark:from-neutral-950/80 dark:via-neutral-950/50 dark:to-transparent" />
      </div>

      {/* Content overlays above Spline */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Find your next favorite movie
              </h1>
              <motion.p
                className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg max-w-xl"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
              >
                Smart, personalized picks based on what you love. Explore trending titles, filter by genre, and discover hidden gems.
              </motion.p>
              <motion.div
                className="mt-6 flex gap-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              >
                <a
                  href="#trending"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white shadow hover:bg-indigo-700 active:scale-[0.98] transition-transform"
                >
                  <Play size={18} />
                  Start exploring
                </a>
                <a
                  href="#genres"
                  className="inline-flex items-center px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-[0.98] transition-colors transition-transform"
                >
                  Browse genres
                </a>
              </motion.div>
            </motion.div>

            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
