import { useEffect, useState } from 'react';
import { fetchMovieDetailsById } from 'services/api';
import { Outlet, useParams, Link } from 'react-router-dom';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const [movieCard, setMovieCard] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetailsById = async movieId => {
      try {
        const movieCard = await fetchMovieDetailsById(movieId);
        setMovieCard(movieCard);
      } catch (err) {
        console.log(err.message);
      }
    };
    getMovieDetailsById(movieId);
  }, [movieId]);

  return (
    <>
      {!movieCard ? <Loader /> : <MovieDescription movieCard={movieCard} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};
