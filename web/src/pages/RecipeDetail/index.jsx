import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import { getRecipes } from '../../lib/api';
import { Container, ContainerDetails, ContainerHeader } from './style';

export default function RecipeDetail() {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const { pathname } = useLocation();

  const type = pathname.split('/')[1] === 'foods' ? 'meal' : 'cocktail';
  const recipeId = pathname.replace(/[^0-9]/g, '');
  const pathVideo = recipe.strYoutube || '';

  useEffect(() => {
    setIsFetching(true);
    const fetchRecipe = async () => {
      const data = await getRecipes(type, 'id', recipeId);
      setRecipe(data[0]);
    };
    setIsFetching(false);
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
    <>
      <NavBar />
      { isFetching ? (
        <Loading />
      ) : (

        <Container>
          <ContainerHeader bg={recipe.strMealThumb || recipe.strDrinkThumb}>
            <div>
              <span>
                <h1>{recipe.strMeal || recipe.strDrink}</h1>
                <h2>{recipe.strCategory || recipe.strAlcoholic}</h2>
              </span>
              <i className="bx bxs-heart" />
            </div>
          </ContainerHeader>
          <ContainerDetails>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={`${ingredient}${index + 1}`}>
                  {`${ingredient} - ${measures[index]}`}
                </li>
              ))}
            </ul>

            <h3>Instructions</h3>
            <p>
              {recipe.strInstructions}
            </p>

            <br />
            <br />

            {
                pathVideo && (
                <iframe
                  src={pathVideo.replace('watch?v=', 'embed/')}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                )
            }
          </ContainerDetails>
        </Container>
      ) }
    </>
  );
}
