import React, { useEffect, useState } from 'react';
import RecipeList from '../components/RecipeList';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      <RecipeList recipes={favorites} />
    </div>
  );
};

export default Favorites;
