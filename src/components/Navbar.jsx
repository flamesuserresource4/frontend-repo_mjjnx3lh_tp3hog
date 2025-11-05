import React from 'react';
import { Film, Search, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="p-2 rounded-md bg-indigo-600 text-white">
            <Film size={20} />
          </div>
          <span className="font-semibold text-lg tracking-tight">CineSuggest</span>
        </motion.div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          {['Discover', 'Trending', 'Genres'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <motion.span whileHover={{ rotate: 12 }} className="inline-flex">
            <Star className="text-amber-500" size={18} />
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="inline-flex">
            <Search size={18} className="text-neutral-500" />
          </motion.span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
