import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRecipes } from '../../lib/api';
import Loading from '../../components/Loading';
import Card from '../../components/Card';
import { CardsContainer, TabsContainer } from './style';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';

export default function MainPage({ type }) {
  const [recipes, setRecipes] = useState(null);
  const [categories, setCategories] = useState(null);
  const [selected, setSelected] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchAllRecipes = async () => {
      setIsFetching(true);
      const responseCategories = await getRecipes(type, 'category');
      const responseRecipes = await getRecipes(type, 'name');
      setCategories(responseCategories);
      setRecipes(responseRecipes);
      setIsFetching(false);
    };
    fetchAllRecipes();
  }, [type]);

  useEffect(() => {
    const fetchRecipesFiltered = async () => {
      const model = selected ? 'filterByCategory' : 'name';
      setIsFetching(true);
      const responseRecipes = await getRecipes(type, model, selected);
      setRecipes(responseRecipes);
      setIsFetching(false);
    };
    fetchRecipesFiltered();
  }, [selected]);

  return (
    <>
      <Header />
      <NavBar />
      <SearchBar type={type} onSearch={setRecipes} isFetching={setIsFetching} />
      <div style={{ position: 'relative', top: '90px' }}>
        {isFetching ? (
          <Loading />
        ) : (
          <>
            <TabsContainer>
              { categories && categories.map(({ strCategory }) => (
                <Button
                  key={strCategory}
                  label={strCategory}
                  onClick={() => setSelected(selected === strCategory ? null : strCategory)}
                  isSelected={selected === strCategory}
                />
              ))}
            </TabsContainer>
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
          </>
        )}
      </div>
    </>
  );
}
MainPage.propTypes = {
  type: PropTypes.string.isRequired,
};
