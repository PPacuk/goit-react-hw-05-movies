import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [queryList, setQueryList] = useState([]);
  const [setSearchParams] = useSearchParams();

  const submitHandler = async e => {
    e.preventDefault();

    try {
      const queryList = await fetchMoviesByQuery(`${query}`);
      setQueryList(queryList);
      setSearchParams({ query });
    } catch (err) {
      console.log(err.message);
    }
  };

  const inputHandler = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputHandler} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {queryList.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};
