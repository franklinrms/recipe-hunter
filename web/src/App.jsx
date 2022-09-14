import React, { useEffect, useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
import { getRecipes } from './lib/api';

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchAllFoods = async () => {
      const responseFoods = await getRecipes('cocktail', 'name');
      setRecipes(responseFoods);
    };
    fetchAllFoods();
  }, []);

  return (
    <div>test</div>
    // <Routes>
    //   <Route path="/" /* element={<Navigate to="/foods" />} */ />
    //   {/* <Route path="/foods" element={} /> */}
    // </Routes>
  );
}
