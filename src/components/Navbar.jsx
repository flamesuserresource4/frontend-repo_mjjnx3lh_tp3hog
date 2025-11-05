import React from 'react';
import { Film, Search, Star } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-indigo-600 text-white">
            <Film size={20} />
          </div>
          <span className="font-semibold text-lg tracking-tight">CineSuggest</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#discover" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Discover</a>
          <a href="#trending" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Trending</a>
          <a href="#genres" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Genres</a>
        </nav>
        <div className="flex items-center gap-3">
          <Star className="text-amber-500" size={18} />
          <Search size={18} className="text-neutral-500" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
