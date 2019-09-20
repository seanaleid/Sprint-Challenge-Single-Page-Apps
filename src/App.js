import React from "react";
import {Route} from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";


export default function App() {
  
  
  return (
    <main>
      <Header />

      <Route exact path="/" render={()=> <WelcomePage />} />
      <Route path="/characters" render={props => <CharacterList {...props} />} />

    </main>
  );
}
