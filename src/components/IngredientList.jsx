import { useState } from "react";
const IngredientList = ({availableIngredients, onAdd}) => {
    return <ul>
        {availableIngredients.map((ingredient, index) => {
        return <li key={index} style={{background: ingredient.color}}>{ingredient.name}
            <button onClick={() => onAdd(ingredient)}>+</button></li>
       })}
 
        </ul>;
  };
  
  export default IngredientList;
  