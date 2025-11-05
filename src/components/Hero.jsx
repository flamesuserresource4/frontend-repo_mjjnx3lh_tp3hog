import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="discover"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 opacity-20" />
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Find your next favorite movie
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-lg">
              Smart, personalized picks based on what you love. Explore trending titles, filter by genre, and discover hidden gems.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#trending"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white shadow hover:bg-indigo-700 transition-colors"
              >
                <Play size={18} />
                Start exploring
              </a>
              <a
                href="#genres"
                className="inline-flex items-center px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                Browse genres
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop"
                alt="Cinematic collage"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
