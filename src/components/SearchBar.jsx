import React from 'react';
import { Search } from 'lucide-react';

const genres = [
  'All',
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Drama',
  'Fantasy',
  'Horror',
  'Romance',
  'Sci-Fi',
  'Thriller',
];

const SearchBar = ({ search, onSearch, genre, onGenreChange, sort, onSortChange }) => {
  return (
    <div className="w-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 shadow-sm">
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search movies, actors, or keywords..."
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={genre}
            onChange={(e) => onGenreChange(e.target.value)}
            className="px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
            aria-label="Filter by genre"
          >
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
            aria-label="Sort results"
          >
            <option value="popularity">Most Popular</option>
            <option value="rating">Top Rated</option>
            <option value="recent">Recently Added</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
