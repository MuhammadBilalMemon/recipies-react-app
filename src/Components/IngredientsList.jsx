import React from "react";
import Ingredients from "./Ingredients";

const IngredientsList = ({ list }) => {
  return (
    <div>
      <ul className="ingredients">
        {list.map((ingredient, i) => (
          <Ingredients key={i} {...ingredient} />
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
