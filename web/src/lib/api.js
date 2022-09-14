import axios from 'axios';

const endPoints = {
  name: 'search.php?s=',
  letter: 'search.php?f=',
  id: 'lookup.php?i=',
  category: 'list.php?c=list',
  ingredientList: 'list.php?i=list',
  filterByCategory: 'filter.php?c=',
  filterByIngredient: 'filter.php?i=',
  random: 'random.php',
  ingredient: 'filter.php?i=',
  areaList: 'list.php?a=list',
  filteredByArea: 'filter.php?a=',
};

// type = cocktail || meal;
export const getRecipes = async (type, query, argument) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `https://www.the${type}db.com/api/json/v1/1/${endPoints[query]}${argument || ''}`,
    });
    return data[type === 'meal' ? 'meals' : 'drinks'];
  } catch (error) {
    return error;
  }
};

export const get = async () => {};
