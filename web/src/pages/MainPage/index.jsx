import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRecipes } from '../../lib/api';
import Loading from '../../components/Loading';
import Card from '../../components/Card';
import CardsContainer from './style';
import NavBar from '../../components/NavBar';

export default function MainPage({ type }) {
  const [recipes, setRecipes] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchAllRecipes = async () => {
      setIsFetching(true);
      const response = await getRecipes(type, 'name');
      setRecipes(response);
      setIsFetching(false);
    };
    fetchAllRecipes();
  }, [type]);

  return (
    <div style={{ display: 'flex' }}>
      <NavBar />

      {isFetching ? (
        <Loading />
      ) : (
        <CardsContainer>
          {
            recipes && recipes.map((recipe) => (
              <Card
                key={recipe.idMeal || recipe.idDrink}
                name={recipe.strMeal || recipe.strDrink}
                thumb={recipe.strMealThumb || recipe.strDrinkThumb}
                clickCard={() => {}}
              />
            ))
        }
        </CardsContainer>
      )}
    </div>
  );
}
MainPage.propTypes = {
  type: PropTypes.string.isRequired,
};
