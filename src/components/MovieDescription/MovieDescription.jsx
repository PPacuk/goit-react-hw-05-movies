import css from './MovieDescription.module.css';
import { PropTypes } from 'prop-types';

export const MovieDescription = ({ movieCard }) => {
  const {
    original_title,
    vote_average,
    overview,
    release_date,
    poster_path,
    genres,
  } = movieCard;
  const imgNotFound = 'img not found'

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : imgNotFound;
  const getDate = new Date(`${release_date}`);
  const getYear = getDate.getFullYear();

  return (
    <div className={css.movieDetailsContainer}>
      <img className={css.cardImg} src={imageUrl} alt={original_title} />
      <ul className={css.description}>
        <li>
          <h2>
            {original_title} ({getYear})
          </h2>
        </li>
        <li>User Score : {Math.round(vote_average * 10)}%</li>
        <h3>Overview</h3>
        <li>{overview}</li>
        <h4>Genres</h4>
        <ul className={css.genresList}>
          {genres.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

MovieDescription.propTypes = {
  movieCard: PropTypes.shape({
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.array,
  }),
};