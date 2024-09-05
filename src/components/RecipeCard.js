import React from 'react';

const RecipeCard = ({ recipe }) => {
  const handleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    savedFavorites.push(recipe);
    localStorage.setItem('favorites', JSON.stringify(savedFavorites));
  };

  return (
    <div>
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <button onClick={handleFavorite}>Save to Favorites</button>
    </div>
  );
};

export default RecipeCard;
