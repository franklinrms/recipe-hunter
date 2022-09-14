import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRecipes } from '../../lib/api';
import Loading from '../../components/Loading';
import Card from '../../components/Card';
import CardsContainer from './style';
import NavBar from '../../components/NavBar';

export default function MainPage({ type }) {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchAllRecipes = async () => {
      const response = await getRecipes(type, 'name');
      setRecipes(response);
    };
    fetchAllRecipes();
  });

  if (!recipes) {
    return <Loading />;
  }

  return (
    <div style={{ display: 'flex' }}>
      <NavBar />

      <CardsContainer>
        {
            recipes.map((recipe) => (
              <Card
                key={recipe.idMeal || recipe.idDrink}
                name={recipe.strMeal || recipe.strDrink}
                thumb={recipe.strMealThumb || recipe.strDrinkThumb}
                clickCard={() => {}}
              />
            ))
        }
      </CardsContainer>
    </div>
  );
}
MainPage.propTypes = {
  type: PropTypes.string.isRequired,
};
