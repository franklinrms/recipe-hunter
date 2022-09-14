import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRecipes } from '../../lib/api';
import Loading from '../../components/Loading';

export default function MainPage({ type }) {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchAllRecipes = async () => {
      const response = await getRecipes(type, 'name');
      setRecipes(response);
    };
    // fetchAllRecipes();
  }, []);

  if (!recipes) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{recipes[0].strMeal}</h1>
    </div>
  );
}
MainPage.propTypes = {
  type: PropTypes.string.isRequired,
};
