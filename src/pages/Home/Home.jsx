import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../serviceAPI/serviceAPI';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    getTrendingMovies().then(data => {
      if (typeof data !== 'object') {
        setLoading(false);
        return;
      }
      const filteredMovies = data.map(({ id, title }) => ({ id, title }));
      setTrendingMovies(filteredMovies);
      setLoading(false);
    });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {loading && <Loader />}
      <ul>
        {trendingMovies.length > 0 &&
          trendingMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Home;
