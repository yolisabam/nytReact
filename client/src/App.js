import React from "react";
import Jumbotron from "./components/jumbotron";
import Main from "./components/main";
import Search from "./components/search";
import Saved from "./components/saved";


const App = () => 
  <div>
    <Jumbotron />
    <Search />
    <Main />
    <Saved />
  </div>;

export default App;
