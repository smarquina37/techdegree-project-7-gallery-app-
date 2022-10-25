import React, { useState, useEffect } from "react";
import axios from "axios";

//App Components
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import NotFound from "./components/NotFound";
import SearchForm from "./components/SearchForm";

const apiKey = "12222dadc027d3672098626fecc10a80";

const App = (props) => {
  //Need to add initial state
  // const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=12222dadc027d3672098626fecc10a80&tags=puppies&per_page=24&format=json&nojsoncallback=1"
  //     )
  //     .then((resp) => {
  //       setPhotos(resp.data.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching and parsing data", error);
  //     });
  // }, []);
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <PhotoContainer />
      {/* <NotFound /> */}
    </div>
  );
};

export default App;
