export const CastList = ({ castCard }) => {
  const IMAGE_URL = `https://image.tmdb.org/t/p/original/`;
  return (
    <div>
      <ul>
        {castCard.cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            {name} {character}
            {<img src={`${IMAGE_URL}${profile_path}`} alt={name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};
