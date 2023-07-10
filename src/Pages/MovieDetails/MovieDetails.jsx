import { useEffect, useState } from 'react';
import css from './MovieDetails.module.css';
import { fetchMovieDetailsById } from 'services/api';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieCard, setMovieCard] = useState({});
  const { movieId } = useParams();
  const imageUrl = `https://image.tmdb.org/t/p/original/${movieCard.poster_path}`;
  console.log(imageUrl);
  const { genres, original_title, vote_average, overview } = movieCard;
console.log(movieCard);
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
    <div>
      <img className={css.cardImg} src={imageUrl} alt="" />
      <div>
        {original_title}
        {vote_average}
        {overview}
        {/* {genres.map(e => e.name)} */}
      </div>
    </div>
  );
};
