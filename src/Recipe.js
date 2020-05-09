// Imports the recipe.module.css for the design.
// This builds the structure for the recipies.

import React,{useState} from 'react'; 
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <o1>
                <div class="title"> 
                    <h1>
                    Ingredients:
                    </h1>
                </div>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </o1>
            
            <div class="title2"> 
                    <h1>
                    Calories:
                    <p>{calories.toPrecision(6)}</p>
                    </h1>
                </div>

        
           
            <img className={style.image} src={image} alt=""/>
        </div>
    );
};

export default Recipe;
