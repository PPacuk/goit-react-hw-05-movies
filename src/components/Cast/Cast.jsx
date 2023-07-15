import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from 'services/api';
import css from './Cast.module.css';

const Cast = () => {
  const [castCard, setCastCard] = useState();
  const { movieId } = useParams();
  const IMAGE_URL = `https://image.tmdb.org/t/p/original/`;

  useEffect(() => {
    const getCastById = async movieId => {
      try {
        const castCard = await fetchCastById(movieId);
        setCastCard(castCard);
      } catch (err) {
        console.log(err.message);
      }
    };
    getCastById(movieId);
  }, [movieId]);

  return (
    <>
      {!castCard ? (
        <Loader />
      ) : (
        <ul className={css.castCard}>
          {castCard.cast.map(({ id, name, character, profile_path }) => (
            <li className={css.castItem} key={id}>
              {!profile_path ? (
                <img
                  className={css.castImg}
                  src={
                    'https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149278997.jpg?w=826&t=st=1689412268~exp=1689412868~hmac=dcbe71a8f91ac6b5cac93ce82194fed45b76c00be951a682d9dc589f49d635de'
                  }
                  alt={name}
                />
              ) : (
                <img
                  className={css.castImg}
                  src={`${IMAGE_URL}${profile_path}`}
                  alt={name}
                />
              )}
              <ul className={css.castNameList}>
                <li>{name}</li>
                <li>{character}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;