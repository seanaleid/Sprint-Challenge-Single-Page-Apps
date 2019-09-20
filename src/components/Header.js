import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
        <nav class="navbar navbar-light bg-light">
          <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
          <Link to="/" class="navbar-brand">Home</Link>
          <Link to="/characters" class="navbar-brand">Characters</Link>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
    </header>
  );
}
