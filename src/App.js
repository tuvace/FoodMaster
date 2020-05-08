import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';


//Egendefinert API key og API ID
const App = () => {
const APP_ID = "0317b504";
const APP_KEY = "db82dcfff5cf65ae1c02067635f6c40a";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState(" ");
const [query, setQuery] = useState("pesto");

useEffect(() => {
  getRecipes();
}, [query]);

//Henter APIen med den egendefinerte nøkkelen og IDen.
const getRecipes = async () => {
  
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );

  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
  };
	
const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}



//Lage søkefelt med søkemotor.
//I den andre delen prøver vi å lage to knapper, en for å komme til kalender og en for å komme til innlogging.
//Disse knappene fungerer ikke optimalt enda. Den prøver å omdirigere oss til ny side, men viser fortsatt bare forsiden.
//Tredje delen henter ut oppskrifter fra Recipe.js
  return( 

    
    <div className="App">

    <div class="btn-group">
    <form action="calendar.js" >
  <button class="btn1"> Calendar</button>
  </form>
  <form action="index.js">
  <button class="btn"> HOME</button>
  </form>
  <form action="src/lib/indexx.js">
  <button class="btn2"> Login</button>
  </form>
</div>

    <form onSubmit={getSearch} className="search-form">

      <input 
      className="search-bar" 
      type="text" 
      value={search} 
      onChange={updateSearch} 
      />
      <button className="search-button" type="submit">
      Search
      </button>
    </form>


<div class="header"> 
<h1>
  Food Master
</h1>
<p>An Open Source Project</p>
</div>
    
    {recipes.map(recipe => (
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
    
      />
      
    ))}
    </div>
    
    
  );
  };
  
  
    
export default App;


