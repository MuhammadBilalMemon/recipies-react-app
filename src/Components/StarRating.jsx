import React, { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStar, setSelectedStar] = useState(0);

  return (
    <div style={{ padding: "5px", margin: "2px" }}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStar > i}
          onSelect={() => setSelectedStar(i + 1)}
        />
      ))}
      <p>
        {selectedStar} of {totalStars}
      </p>
    </div>
  );
};

export default StarRating;
