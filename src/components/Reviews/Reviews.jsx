import css from './Reviews.module.css';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/api';

 const Reviews = () => {
  const [reviewsCard, setReviewsCard] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getCastById = async movieId => {
      try {
        const reviewsCard = await fetchReviewsById(movieId);
        setReviewsCard(reviewsCard);
      } catch (err) {
        console.log(err.message);
      }
    };
    getCastById(movieId);
  }, [movieId]);

  return (
    <>
      {!reviewsCard ? (
        <Loader />
      ) : reviewsCard.results.length === 0 ? (
        <div className={css.reviewsNoResults}>There is no reviews yet.</div>
      ) : (
        reviewsCard.results.map(({ author, content, id }) => (
          <ul key={id} className={css.reviewsList}>
            <li className={css.reviewsAuthor}>Author: {author}</li>
            <li className={css.reviewsContent}>{content}</li>
          </ul>
        ))
      )}
    </>
  );
};

export default Reviews;