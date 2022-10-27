import React from "react";
// import { useParams } from "react-router-dom";
import Photo from "./Photo";
// import NotFound from "./NotFound";

const PhotoContainer = (props) => {
  // let { keyword } = useParams();

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

// If no matches are found by the search, the app includes a message to tell the user
//there are no matches.
//   let photos;
//   if (results.length > 0) {
//     photos = results.map((photo) => (
//       <Photo
//         server={photo.server}
//         secret={photo.secret}
//         id={photo.id}
//         key={photo.id}
//         title={photo.title}
//       />
//     ));
//   } else {
//     photos = <NotFound />;
//   }
//   return (
//     <div className="photo-container">
//       <ul>{photos}</ul>
//     </div>
//   );
// };
