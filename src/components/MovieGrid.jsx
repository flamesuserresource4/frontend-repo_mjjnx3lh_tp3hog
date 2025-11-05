import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Rating = ({ value }) => {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  const stars = Array.from({ length: 5 }).map((_, i) => {
    const filled = i < full || (i === full && hasHalf);
    return (
      <Star
        key={i}
        size={16}
        className={filled ? 'fill-amber-400 text-amber-400' : 'text-neutral-400'}
      />
    );
  });
  return <div className="flex items-center gap-0.5">{stars}</div>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

const MovieGrid = ({ movies, title, id }) => {
  return (
    <section id={id} className="mt-10">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">See all</a>
      </div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {movies.map((m) => (
          <motion.article
            key={m.id}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group rounded-xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-[2/3] overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${m.id}/600/900`}
                alt={m.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium line-clamp-1">{m.title}</h3>
              <div className="mt-1 flex items-center justify-between text-xs text-neutral-500">
                <span>{m.year} • {m.genre}</span>
                <div className="flex items-center gap-1">
                  <Rating value={m.rating / 2} />
                  <span className="tabular-nums">{m.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default MovieGrid;
