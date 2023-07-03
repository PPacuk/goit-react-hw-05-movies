import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const getTrendingMovies = async () => {
    try {
      const trendingMovies = await fetchTrendingMovies();
      setTrendingMovies(trendingMovies);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <ul>
      {trendingMovies.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};
