import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, SearchBarContainer, SearchButton } from './style';
import { getRecipes } from '../../lib/api';

export default function SearchBar({ type, onSearch, isFetching }) {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    isFetching(true);
    if (search.length === 1) {
      const response = await getRecipes(type, 'letter', search);
      onSearch(response);
    } else {
      const ingredient = await getRecipes(type, 'ingredient', search);
      const name = await getRecipes(type, 'name', search);
      onSearch(name || ingredient);
    }
    isFetching(false);
  };
  return (
    <SearchBarContainer>
      <Input
        type="text"
        placeholder="Search..."
        onChange={({ target }) => setSearch(target.value)}
      />
      <SearchButton
        type="button"
        disabled={search.length === 0}
        onClick={handleSearch}
      >
        <i className="bx bx-search" />
      </SearchButton>
    </SearchBarContainer>
  );
}
SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  isFetching: PropTypes.func.isRequired,
};
