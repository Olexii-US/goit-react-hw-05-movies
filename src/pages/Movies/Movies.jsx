import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSearchedMovies } from '../../serviceAPI/serviceAPI';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import Loader from '../../components/Loader/Loader';

const Movies = () => {
  const [queryMovies, setQueryMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleSearchSubmit = searchName => {
    setSearchParams(searchName !== '' ? { query: searchName } : {});
  };
  const query = searchParams.get('query');

  useEffect(() => {
    setLoading(true);
    if (!query) {
      setLoading(false);
      return;
    }
    getSearchedMovies(query).then(data => {
      if (data.length === 0) {
        setLoading(false);
        toast.warn('No movie was found for your request');
        return;
      }
      const filteredMovies = data.map(({ id, title }) => ({ id, title }));
      setQueryMovies(filteredMovies);
      setLoading(false);
    });
  }, [query]);

  return (
    <main>
      <Searchbar onSearchSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      <ul>
        {queryMovies.length > 0 &&
          queryMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Movies;
