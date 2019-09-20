import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then(response =>{
      console.log(response.data);
      console.log(typeof response.data.results);
      const results = response.data.results;
      const charactersFromApi = setCharacter(results);
      console.log(charactersFromApi);
    })
    .catch(err =>{
      console.log(`err`);
    })
  }, []);

  return (
    <section className="character-list">
      {character.map(character =>{
        return(
          <CharacterCard
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
          />
        )
      })}
    </section>
  );
}
