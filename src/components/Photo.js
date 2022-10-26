import React from "react";

// https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg

//Created Photo.js and added li to hold images
const Photo = (props) => {
  return (
    <li>
      <img
        src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
        alt={props.title}
      />
    </li>
  );
};
export default Photo;
