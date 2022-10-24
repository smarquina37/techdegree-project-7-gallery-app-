import React from "react";
import Photo from "./Photo";

const PhotoContainer = (props) => {
  return (
    <div className="photo-container">
      <ul>
        <Photo />
      </ul>
    </div>
  );
};

export default PhotoContainer;
