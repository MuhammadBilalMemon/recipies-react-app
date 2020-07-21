import React from "react";
import Instructions from "./Instructions";
import IngredientsList from "./IngredientsList";
import StarRating from "./StarRating";

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <>
      <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <StarRating />
        <IngredientsList list={ingredients} />
        <Instructions title="Cooking Instructions" steps={steps} />
      </section>
    </>
  );
};

export default Recipe;
