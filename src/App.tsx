import React from "react";

import {Navbar} from './layouts/NavbarAndFooter/Navbar';
import {ExploreTopBooks} from './layouts/HomePage/components/ExploreTopBooks'
import { Carousel } from "./layouts/HomePage/components/Carousel";

import "./App.css";

function App() {
  return(
    <>
    <Navbar/>
    <ExploreTopBooks/>
    <Carousel/>
    </>

  );
 
}

export default App;
