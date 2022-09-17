import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { getRecipes } from '../../lib/api';

export default function RecipeDetail() {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const { pathname } = useLocation();
  const type = pathname.split('/')[1] === 'foods' ? 'meal' : 'cocktail';
  const recipeId = pathname.replace(/[^0-9]/g, '');

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipes(type, 'id', recipeId);
      setRecipe(data[0]);
    };
    fetchRecipe();
  }, [recipeId]);

  useEffect(() => {
    const handleIngredient = () => {
      const arrIngredients = Object.entries(recipe)
        .filter((item) => item[0].includes('strIngredient')
            && item[1] !== ''
            && item[1] !== null)
        .map((ingredient) => ingredient[1]);
      setIngredients(arrIngredients);
    };
    const handleMeasure = () => {
      const arrMeasures = Object.entries(recipe)
        .filter((item) => item[0].includes('strMeasure')
            && item[1] !== ' '
            && item[1] !== null)
        .map((measure) => measure[1]);
      setMeasures(arrMeasures);
    };
    handleIngredient();
    handleMeasure();
  }, [recipe]);

  return (
    <div>
      <NavBar />

    </div>
  );
}
