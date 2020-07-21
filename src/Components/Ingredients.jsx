import React from "react";

const Ingredients = ({ amount, measurement, name }) => {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
};

export default Ingredients;
