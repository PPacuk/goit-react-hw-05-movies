import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';
import { Notify } from 'notiflix';
import css from './Movies.module.css'

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [queryList, setQueryList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();



  const submitHandler = async e => {
    e.preventDefault();
    searchParams.get('query');
    if (query === '') {
      return Notify.failure('Field is empty!!!');
    }

    try {
      const queryList = await fetchMoviesByQuery(`${query}`);
      setQueryList(queryList);
      setSearchParams({ query: query });
    } catch (err) {
      console.log(err.message);
    }
  };

  const inputHandler = e => {
    setQuery(e.target.value);
  };

  return (
    <div className={css.moviesContainer}>
      <form className={css.moviesForm} onSubmit={submitHandler}>
        <input className={css.moviesInput} type="text" value={`${query}`} onChange={inputHandler} />
        <button type="submit">Search</button>
      </form>
      <ul className={css.moviesList}>
        {queryList.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} >{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
