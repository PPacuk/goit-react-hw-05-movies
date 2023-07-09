import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <>
      <h1>Trending now</h1>
      <ul>
        {trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
