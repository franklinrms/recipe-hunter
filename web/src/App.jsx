import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecipeDetail from './pages/RecipeDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/foods" />} />
      <Route path="/foods" element={<MainPage type="meal" />} />
      <Route path="/foods/:id" element={<RecipeDetail type="meal" />} />
      <Route path="/drinks" element={<MainPage type="cocktail" />} />
      <Route path="/drinks/:id" element={<RecipeDetail type="cocktail" />} />
    </Routes>
  );
}
