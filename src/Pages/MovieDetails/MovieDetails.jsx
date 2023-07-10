import { useEffect, useState } from 'react';
import css from './MovieDetails.module.css';
import { fetchMovieDetailsById } from 'services/api';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieCard, setMovieCard] = useState('');
  const { movieId } = useParams();
  
  const getMovieDetailsById = async () => {
    try {
      const movieCard = await fetchMovieDetailsById(`${movieId}`);
      setMovieCard(movieCard);
    } catch (err) {
      console.log(err.message);
    }
  };
  const imageUrl = `https://image.tmdb.org/t/p/original/${movieCard.poster_path}`;
  console.log(imageUrl);
  
  useEffect(() => {
    getMovieDetailsById(movieId);
  }, []);

  return (
    <div>
      <img className={css.cardImg} src={imageUrl} alt="" />
      <div>
        {movieCard.original_title} {movieCard.vote_average} {movieCard.overview}
      </div>
    </div>
  );
};
