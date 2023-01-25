import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import * as styles from './Searchbar.styled';

export const Searchbar = ({ onSearchSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleSearch = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchName.trim() === '') {
      return toast.warn('Please, enter a search parameter');
    }
    onSearchSubmit(searchName);
    setSearchName('');
  };

  return (
    <styles.HeaderSearch>
      <styles.SearchForm onSubmit={handleSubmit}>
        <styles.SearchButton>Search</styles.SearchButton>
        <styles.SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchName}
          onChange={handleSearch}
        />
      </styles.SearchForm>
    </styles.HeaderSearch>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};
