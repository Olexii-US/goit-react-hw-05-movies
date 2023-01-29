import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../../serviceAPI/serviceAPI';
import image from '../../../components/imageNotFound.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(data => {
      if (typeof data !== 'object') {
        return;
      }
      const filteredData = data.map(
        ({ id, name, character, profile_path }) => ({
          id,
          name,
          character,
          profile_path,
        })
      );
      setCastDetails(filteredData);
    });
  }, [movieId]);

  return (
    <ul>
      {castDetails.length !== 0
        ? castDetails.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <h3>{name}</h3>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt={name}
                  width="100px"
                />
              ) : (
                <img src={image} alt="not found" width="100px" />
              )}
              <p>{character}</p>
            </li>
          ))
        : "We don't have any cast information for this movie."}
    </ul>
  );
};

export default Cast;
