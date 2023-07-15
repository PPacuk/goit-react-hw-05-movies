import { useEffect, useState } from 'react';
import { fetchMovieDetailsById } from 'services/api';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieCard, setMovieCard] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLinkHref = location.state?.from ?? '/';

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
      {
        <Link className={css.goBackBtn} to={goBackLinkHref}>
          &larr; Go back
        </Link>
      }

      {!movieCard ? <Loader /> : <MovieDescription movieCard={movieCard} />}
      <div className={css.extraInfo}>
        Additional information
        <ul className={css.extraInfoList}>
          <li>
            <Link to="cast" state={{ from: goBackLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: goBackLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetails;
