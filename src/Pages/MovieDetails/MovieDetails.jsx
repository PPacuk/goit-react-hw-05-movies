import { useEffect, useState } from 'react';
import { fetchMovieDetailsById } from 'services/api';
import { Outlet, useParams, Link } from 'react-router-dom';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const [movieCard, setMovieCard] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetailsById = async () => {
      try {
        const movieCard = await fetchMovieDetailsById(movieId);
        setMovieCard(movieCard);
      } catch (err) {
        console.log(err.message);
      }
    };
    getMovieDetailsById();
  }, [movieId]);

  return (
    <>
      {!movieCard ? <Loader /> : <MovieDescription movieCard={movieCard} />}
      <div className={css.extraInfo}>
        Additional information
        <ul className={css.extraInfoList}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};
