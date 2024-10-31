import { useState } from "react";
const BurgerStack = ({stack, onRemove}) => {
    return (
        <div className="burger-stack">
          <h3>Your Burger </h3>
          <ul>
            {stack.map((ingredient, index) => (
              <li key={index} style={{ background: ingredient.color }}>
                {ingredient.name} 
                <button onClick={() => onRemove(index)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
  export default BurgerStack;
  