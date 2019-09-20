import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

export default function SearchForm() {
  // searchTerm will save the data from the search input on every occurance of the change event.
  const [searchTerm, setSearchTerm] = useState("");
  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //   axios.get(`https://rickandmortyapi.com/api/character`)
  //   .then(response =>{
  //     console.log(response.data);
  //     console.log(typeof response.data.results);
  //     const results = response.data.results;
  //     const charactersFromApi = setSearchTerm(results);
  //     console.log(charactersFromApi);
  //   })
  //   .catch(err =>{
  //     console.log(`err`);
  //   })
  // }, []);

  useEffect((props) => {
    const results = props.filter(character =>
      props.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = event => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);

  return (
    <div className="App">
      <form>
        {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
        {/* Two-way binding just means that:
        When properties in the model get updated, so does the UI.
        When UI elements get updated, the changes get propagated back to the model. */}
        <label for="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li>{character}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
}