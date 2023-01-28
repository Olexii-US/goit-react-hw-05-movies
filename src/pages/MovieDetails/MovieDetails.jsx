import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../serviceAPI/serviceAPI';
import {
  GoBackBtn,
  MovieDetailsBox,
  MovieBox,
  GenresList,
  MovieImg,
  GenresListItem,
  MovieInfoBox,
  InfoList,
  InfoListLink,
} from './MovieDetails.styled';

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
      <GoBackBtn to={location.state?.from ?? '/movies'}> 🡰 Go back</GoBackBtn>
      <MovieBox>
        <MovieImg
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          width="240px"
        />
        <MovieDetailsBox>
          <h2>{title}</h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres.map(({ id, name }) => (
              <GenresListItem key={id}>{name}</GenresListItem>
            ))}
          </GenresList>
        </MovieDetailsBox>
      </MovieBox>

      <MovieInfoBox>
        <h4>Additional information:</h4>
        <InfoList>
          {linkItemConfig.map(({ to, name }) => (
            <li key={to}>
              <InfoListLink to={to} state={{ from: location.state?.from }}>
                {name}
              </InfoListLink>
            </li>
          ))}
        </InfoList>
      </MovieInfoBox>
      <Suspense fallback={<p>Details is Loading...</p>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
