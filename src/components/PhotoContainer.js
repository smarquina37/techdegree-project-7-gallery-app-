import React from "react";
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import SearchForm from "./SearchForm";

const PhotoContainer = (props) => {
  let { keyword } = useParams();

  const results = props.data;
  //Incomplete map of <Photo/>
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
