import React from "react";
import Photo from "./Photo";

const PhotoContainer = (props) => {
  const results = props.data;

  // Map through photo data from API
  let photos = results.map((photo) => (
    <Photo
      server={photo.server}
      secret={photo.secret}
      id={photo.id}
      key={photo.id}
      title={photo.title}
    />
  ));
  return (
    <div className="photo-container">
      <ul>{photos}</ul>
    </div>
  );
};

export default PhotoContainer;
