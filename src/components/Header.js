import React from "react";
import { Link} from "react-router-dom";





export default function Header() {
  return (
    <header className="ui centered">
        <nav class="navbar navbar-light bg-light">
          <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
          <Link to="/" class="navbar-brand">Home</Link>
          <Link to="/characters" class="navbar-brand">Characters</Link>

        </nav>

        

    </header>
  );
}
