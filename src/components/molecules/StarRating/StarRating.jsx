import React from "react";

import "./StarRating.scss";
import { ReactComponent as Star } from "Images/rating_star.svg";

function StarRating({ rating, setRating }) {

  React.useEffect(() => {
    const stars = Array.from(
      document.getElementsByClassName("StarRating__star")
    );

    stars.slice(0, rating).map((element) => {
      element.classList.add("on");
    });

    stars.slice(rating).map((element) => {
      element.classList.remove("on");
    });
  });

  const onClick = (e) => {
    setRating(e.target.getAttribute("value"));
  };

  return (
    <div className="StarRating__container">
      <button
        className="StarRating__container-button"
        type="button"
        onClick={onClick}
        value={1}
      >
        <Star className="StarRating__star" />
      </button>
      <button
        className="StarRating__container-button"
        type="button"
        onClick={onClick}
        value={2}
      >
        <Star className="StarRating__star" />
      </button>
      <button
        className="StarRating__container-button"
        type="button"
        onClick={onClick}
        value={3}
      >
        <Star className="StarRating__star" />
      </button>
      <button
        className="StarRating__container-button"
        type="button"
        onClick={onClick}
        value={4}
      >
        <Star className="StarRating__star" />
      </button>
      <button
        className="StarRating__container-button"
        type="button"
        onClick={onClick}
        value={5}
      >
        <Star className="StarRating__star" />
      </button>
    </div>
  );
}

export { StarRating };
