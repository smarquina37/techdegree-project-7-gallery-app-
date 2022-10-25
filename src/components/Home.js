import React from "react";

// //App Comp
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import PhotoContainer from "./PhotoContainer";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <Nav />
      <PhotoContainer />
    </div>
  );
};

export default Home;
