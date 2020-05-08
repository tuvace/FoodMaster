// Importerer recipe.module.css for design.
// Denne bygger opp oppskriftene.

import React,{useState} from 'react'; 
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <o1>
                Ingredients: {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </o1>
            
            <p>Calories: {calories.toPrecision(6)}</p>
           
            <img className={style.image} src={image} alt=""/>
        </div>
    );
};

export default Recipe;
