import { useState } from 'react';
import { fetchMoviesByQuery } from 'services/api';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [queryList, setQueryList] = useState([]);
  
  const submitHandler = async e => {
    e.preventDefault();
    
    try {
      const queryList = await fetchMoviesByQuery(`${query}`);
      setQueryList(queryList);
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
