import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';
import { Notify } from 'notiflix';
import css from './Movies.module.css';

 const Movies = () => {
  const [query, setQuery] = useState('');
  const [queryList, setQueryList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const movieName = searchParams.get('query');

  const submitHandler = async e => {
    e.preventDefault();
    if (query === '') {
      return Notify.failure('Field is empty!!!');
    }
    setSearchParams({ query: query });
  };

  const inputHandler = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const queryList = await fetchMoviesByQuery(`${movieName}`);
        setQueryList(queryList);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMovies();
  }, [movieName]);

  return (
    <div className={css.moviesContainer}>
      <form className={css.moviesForm} onSubmit={submitHandler}>
        <input
          className={css.moviesInput}
          type="text"
          value={`${query}`}
          onChange={inputHandler}
        />
        <button type="submit">Search</button>
      </form>
      <ul className={css.moviesList}>
        {queryList.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;