import React from "react";
import type { CharacterSelect } from "../components/character";
import { Link } from "react-router-dom";
import "./character-select.css";

const characters: CharacterSelect[] = [
  {
    id: "1",
    general: {
      characterName: "Badulf",
      playerName: "string",
      chronicleName: "string",
      nature: "string",
      demeanor: "string",
      concept: "string",
      clan: "string",
      generation: 13,
      sire: "string",
    },
  },
  {
    id: "2",
    general: {
      characterName: "Roy",
      playerName: "string",
      chronicleName: "string",
      nature: "string",
      demeanor: "string",
      concept: "string",
      clan: "string",
      generation: 13,
      sire: "string",
    },
  },
  {
    id: "3",
    general: {
      characterName: "Brian",
      playerName: "string",
      chronicleName: "string",
      nature: "string",
      demeanor: "string",
      concept: "string",
      clan: "string",
      generation: 13,
      sire: "string",
    },
  },
];

const CharacterSelectPage: React.FC = () => {
  const handleCharacterSelect = (character: CharacterSelect) => {
    console.log(`Selected character: ${character.general.characterName}`);
  };

  return (
    <section className="character-selection">
      <h1>Select Your Character</h1>
      <div className="character-container">
        {characters.map((character) => (
          <Link
            to={`/character/${character.id}`}
            key={character.id}
            onClick={() => handleCharacterSelect(character)}
            className="character-card">
            <h3>{character.general.characterName}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CharacterSelectPage;
