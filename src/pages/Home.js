import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=d2d1c0d8&app_key=
73f8cfaddd63f434dd16a9f34be5bd61`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Home;
