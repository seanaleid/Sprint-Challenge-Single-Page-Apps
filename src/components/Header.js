import React from "react";

export default function Header() {
  return (
    <header className="ui centered">
        <nav class="navbar navbar-light bg-light">
          <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
          <a class="navbar-brand">Navbar</a>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
    </header>
  );
}
