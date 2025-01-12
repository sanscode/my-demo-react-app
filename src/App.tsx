import React from "react";

import {Navbar} from './layouts/NavbarAndFooter/Navbar';
import {ExploreTopBooks} from './layouts/HomePage/components/ExploreTopBooks'

import "./App.css";

function App() {
  return(
    <>
    <Navbar/>
    <ExploreTopBooks/>
    </>

  );
 
}

export default App;
