import React from "react";

const IngredientsList = ({ list }) => {
  return (
    <div>
      <ul className="ingredients">
        {list.map((ingredient, i) => (
          <Ingredient key={i} {...ingredient} />
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
