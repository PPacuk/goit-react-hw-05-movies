import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import css from './Home.module.css'

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
    <div className={css.homeContainer}>
      <h1>Trending now</h1>
      <ul className={css.homeList}>
        {trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
