// src/components/RecipeSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    const APP_ID = 'd2d1c0d8';
    const APP_KEY = '73f8cfaddd63f434dd16a9f34be5bd61';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    try {
      const response = await axios.get(url);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
      />
      <button onClick={searchRecipes}>Search</button>

      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <ul>
              {recipe.recipe.ingredientLines.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
