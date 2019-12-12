import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/navbar.component";
import RecipesList from "./components/recipes-list.component";
import Recipe from "./components/recipe.component";
import AddRecipe from "./components/add-recipe.component";
import EditRecipe from "./components/edit-recipe.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={RecipesList} />
      <Route path="/add" component={AddRecipe} />
      <Route path="/recipe/:id" component={Recipe} />
      <Route path="/edit/recipe/:id" component={EditRecipe} />
    </Router>
  );
}

export default App;
