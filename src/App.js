import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';


//Customized API key and API ID
const App = () => {
const APP_ID = "0317b504";
const APP_KEY = "db82dcfff5cf65ae1c02067635f6c40a";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState(" ");
const [query, setQuery] = useState("pesto");

useEffect(() => {
  getRecipes(); //Gets recipes
}, [query]); //When having query here, the site will only update after hitting the submit button (search). 
//This is the only time the query is changing/updating.
//There will only appear recipes from the chosen query.


const getRecipes = async () => {
  
  //Fetches the API with your own customized ID and key
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
  e.preventDefault(); //Stops page refresh.
  setQuery(search); 
  setSearch(''); //Resets the search bar to empty strings.
}



//In the first part, it is made a button group.
//One button for the calendar, home and login. They do not work optimally. 
//They are trying to redirect to a new site, but it still only shows the front page (index.js).

//The second part is the search bar.

//Thirdly, it is the header on our front page.

//Lastly, there is a part getting the recipes.

  return( 

    <div className="App">

<div class="btn-group"> 
<form action="calendar.js" >
<button class="btn1"> Calendar</button>
</form>

<form action="index.js">
<button class="btn"> HOME</button>
</form>

<form action="indexx.js">
<button class="btn2" onclick="window.location.href='indexx.js'">Login</button>
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

    
    {recipes.map(recipe => ( //This gets the recipes with their title, ingredients, calories and image.
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


