import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { getTrendingMovies } from '../../serviceAPI/serviceAPI';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState('');

  useEffect(() => {
    getTrendingMovies().then(data => {
      console.dir('data', typeof data);

      if (typeof data !== 'object') {
        return;
      }
      const filteredMovies = data.map(({ id, title }) => ({ id, title }));
      setTrendingMovies(filteredMovies);
    });
  }, []);

  console.log('trendingMovies', trendingMovies.length);
  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.length > 0 &&
          trendingMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </main>
  );
};
