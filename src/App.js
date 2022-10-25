import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

//App Components
import Home from "./components/Home";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
// import Cats from "./components/Nav/Cats";
// import Dogs from "./components/Nav/Dogs";
// import Computers from "./components/Nav/Computers";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<SearchForm />} />
        <Route path="nav/*" element={<Nav />} />
        {/* <Route path="nav" element={<Nav />}>
          <Route index element={<Navigate replace to="cats" />} />
          <Route path="/nav/cats" element={"/nav/cats"} />
          <Route path="/nav/dogs" element={"dogs"} />
          <Route path="/nav/computers" element={"computers"} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
