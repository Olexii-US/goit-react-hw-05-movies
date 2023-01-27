import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../serviceAPI/serviceAPI';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieCard, setMovieCard] = useState(null);
  const location = useLocation();
  useEffect(() => {
    getMovieDetails(Number(movieId)).then(data => {
      if (typeof data !== 'object') {
        return;
      }

      setMovieCard(data);
    });
  }, [movieId]);

  if (!movieCard) {
    return null;
  }

  const { title, vote_average, poster_path, overview, genres } = movieCard;

  const linkItemConfig = [
    { to: 'cast', name: 'Cast' },
    { to: 'reviews', name: 'Reviews' },
  ];

  return (
    <main>
      <Link to={location.state?.from ?? '/movies'}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          width="200px"
        />
        <h2>{title}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        Additional information:
        <ul>
          {linkItemConfig.map(({ to, name }) => (
            <li key={to}>
              <Link to={to} state={{ from: location.state?.from }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Suspense fallback={<p>Loading in MovieCard...</p>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
