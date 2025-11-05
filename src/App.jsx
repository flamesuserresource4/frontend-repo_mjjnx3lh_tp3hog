import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';

const mockMovies = [
  { id: 101, title: 'Eternal Horizon', year: 2023, genre: 'Sci-Fi', rating: 8.7, popularity: 96 },
  { id: 102, title: 'Midnight Heist', year: 2022, genre: 'Crime', rating: 7.9, popularity: 84 },
  { id: 103, title: 'Laugh Track', year: 2021, genre: 'Comedy', rating: 7.2, popularity: 73 },
  { id: 104, title: 'Crimson Skies', year: 2020, genre: 'Action', rating: 8.1, popularity: 88 },
  { id: 105, title: 'Moonlit Tales', year: 2019, genre: 'Romance', rating: 7.6, popularity: 69 },
  { id: 106, title: 'Forgotten Alley', year: 2018, genre: 'Thriller', rating: 8.3, popularity: 81 },
  { id: 107, title: 'Arcane Academy', year: 2024, genre: 'Fantasy', rating: 8.9, popularity: 94 },
  { id: 108, title: 'Neon Shadows', year: 2023, genre: 'Crime', rating: 8.0, popularity: 79 },
  { id: 109, title: 'Starlight Voyage', year: 2022, genre: 'Sci-Fi', rating: 8.5, popularity: 90 },
  { id: 110, title: 'Haunted Manor', year: 2021, genre: 'Horror', rating: 7.4, popularity: 65 },
  { id: 111, title: 'Paper Hearts', year: 2020, genre: 'Romance', rating: 7.8, popularity: 72 },
  { id: 112, title: 'Quantum Leap', year: 2019, genre: 'Sci-Fi', rating: 8.2, popularity: 85 },
  { id: 113, title: 'Jester’s Court', year: 2018, genre: 'Comedy', rating: 7.1, popularity: 60 },
  { id: 114, title: 'Dragon’s Oath', year: 2024, genre: 'Fantasy', rating: 9.0, popularity: 91 },
  { id: 115, title: 'Silent Truth', year: 2023, genre: 'Drama', rating: 8.4, popularity: 82 },
  { id: 116, title: 'Edge of Night', year: 2021, genre: 'Thriller', rating: 7.9, popularity: 76 },
  { id: 117, title: 'Cartoon Chaos', year: 2020, genre: 'Animation', rating: 7.0, popularity: 58 },
  { id: 118, title: 'Rogue Runner', year: 2019, genre: 'Action', rating: 7.7, popularity: 74 },
  { id: 119, title: 'City of Echoes', year: 2022, genre: 'Drama', rating: 8.1, popularity: 83 },
  { id: 120, title: 'Whispering Woods', year: 2018, genre: 'Fantasy', rating: 7.5, popularity: 62 },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');
  const [sort, setSort] = useState('popularity');

  const filtered = useMemo(() => {
    let list = [...mockMovies];
    if (genre !== 'All') list = list.filter((m) => m.genre === genre);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((m) => m.title.toLowerCase().includes(q));
    }
    switch (sort) {
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'recent':
        list.sort((a, b) => b.year - a.year);
        break;
      case 'title':
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        list.sort((a, b) => b.popularity - a.popularity);
    }
    return list;
  }, [search, genre, sort]);

  const trending = useMemo(() => {
    return [...mockMovies].sort((a, b) => b.popularity - a.popularity).slice(0, 10);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="-mt-10 relative z-10">
          <SearchBar
            search={search}
            onSearch={setSearch}
            genre={genre}
            onGenreChange={setGenre}
            sort={sort}
            onSortChange={setSort}
          />
        </div>
        <MovieGrid id="trending" title="Trending now" movies={trending} />
        <MovieGrid id="genres" title="Your recommendations" movies={filtered.slice(0, 10)} />
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 text-center text-sm text-neutral-500">
        Built with love for movie lovers • © {new Date().getFullYear()} CineSuggest
      </footer>
    </div>
  );
}
