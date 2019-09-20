import React from "react";
import {Route} from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />

      <Route exact path="/" render={()=> <Home />} />
      <Route path="/characters" render={props => <CharacterList {...props} />} />

    </main>
  );
}
