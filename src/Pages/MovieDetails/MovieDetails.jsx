import { useEffect, useState } from 'react';
import css from './MovieDetails.module.css';
import { fetchMovieDetailsById } from 'services/api';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieCard, setMovieCard] = useState({});
  const { movieId } = useParams();
  const imageUrl = `https://image.tmdb.org/t/p/original/${movieCard.poster_path}`;
  // console.log(imageUrl);
  const { original_title, vote_average, overview, release_date } = movieCard;
  // console.log(movieCard);
  const getDate = new Date(`${release_date}`);
  const getYear = getDate.getFullYear();
  const getMovieDetailsById = async movieId => {
    try {
      const movieCard = await fetchMovieDetailsById(`${movieId}`);
      setMovieCard(movieCard);
      // console.log(movieCard);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMovieDetailsById(movieId);
  }, [movieId]);

  return (
    <div className={css.movieDetailsContainer}>
      <img className={css.cardImg} src={imageUrl} alt="" />
      <ul className={css.description}>
        <li>
          <h2>
            {original_title} ({getYear})
          </h2>
        </li>
        <li>User Score : {Math.round(vote_average * 10)}%</li>
        <h3>Overview</h3>
        <li>{overview}</li>
        {/* {genres.map(e => e.name)} */}
      </ul>
    </div>
  );
};
