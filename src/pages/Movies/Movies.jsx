import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getSearchedMovies } from '../../serviceAPI/serviceAPI';
import { Searchbar } from '../../components/Searchbar/Searchbar';

export const Movies = () => {
  const [queryMovies, setQueryMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchSubmit = searchName => {
    console.log('searchName', searchName);
    setSearchParams(searchName !== '' ? { query: searchName } : {});
  };
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    getSearchedMovies(query).then(data => {
      console.log('data', data);
      if (data.length === 0) {
        return;
      }
      const filteredMovies = data.map(({ id, title }) => ({ id, title }));
      setQueryMovies(filteredMovies);
    });
  }, [query]);

  return (
    <main>
      <Searchbar onSearchSubmit={handleSearchSubmit} />
      <ul>
        {queryMovies.length > 0 &&
          queryMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </main>
  );
};
