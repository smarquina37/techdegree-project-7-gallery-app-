import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

//App Components
// import Home from "./components/Home";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import NotFound from "./components/NotFound";
// import Cats from "./components/Nav/Cats";
// import Dogs from "./components/Nav/Dogs";
// import Computers from "./components/Nav/Computers";

const App = (props) => {
  //Need to add initial state
  const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  const performSearch = (tags) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((resp) => {
        setPhotos(resp.data.photos.photo);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  return (
    <div className="container">
      <SearchForm onSearch={performSearch} />
      <Nav performSearch={performSearch} />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        {/* <Route path=":search/:keyword" element={<PhotoContainer />} /> */}
        <Route path="/cats" element={<PhotoContainer data={photos} />} />
        <Route path="/dogs" element={<PhotoContainer data={photos} />} />
        <Route path="/computers" element={<PhotoContainer data={photos} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
