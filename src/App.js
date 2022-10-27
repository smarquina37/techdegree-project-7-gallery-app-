import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

//App Components
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import NotFound from "./components/NotFound";

const App = (props) => {
  const location = useLocation();
  //Need to add initial state for photos
  const [photos, setPhotos] = useState([]);

  // Use the useLocation hook from react-router to check for changes in the URL - displays UI changes with browsers buttons
  useEffect(() => {
    if (location.pathname !== "/") {
      performSearch(location.pathname.replace("/", ""));
    } else {
      performSearch();
    }
  }, [location.pathname]);

  // Function will fetch data from the API using axios
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
        <Route path="/cats" element={<PhotoContainer data={photos} />} />
        <Route path="/dogs" element={<PhotoContainer data={photos} />} />
        <Route path="/computers" element={<PhotoContainer data={photos} />} />
        {/* <Route index element={<PhotoContainer data={photos} />} /> */}
        <Route
          path="/search/:keyword"
          element={<PhotoContainer data={photos} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
