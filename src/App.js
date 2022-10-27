import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

//App Components
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import NotFound from "./components/NotFound";

const App = (props) => {
  //Need to add initial state for photos
  const [photos, setPhotos] = useState([]);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);

  // Upon page loading, we call performSearch function to display photos depending on which state called
  useEffect(() => {
    performSearch();
    performSearch("cats");
    performSearch("dogs");
    performSearch("computers");
  }, []);

  // Function will fetch data from the API using axios
  const performSearch = (tags = "cats") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((resp) => {
        if (tags === "cats") {
          setCats(resp.data.photos.photo);
        } else if (tags === "dogs") {
          setDogs(resp.data.photos.photo);
        } else if (tags === "computers") {
          setComputers(resp.data.photos.photo);
        } else {
          setPhotos(resp.data.photos.photo);
        }
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  return (
    <div className="container">
      <SearchForm onSearch={performSearch} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="/cats" element={<PhotoContainer data={cats} />} />
        <Route path="/dogs" element={<PhotoContainer data={dogs} />} />
        <Route
          path="/computers"
          element={<PhotoContainer data={computers} />}
        />
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
