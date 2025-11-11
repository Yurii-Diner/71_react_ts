import { v4 } from "uuid";
import type { JSX } from "react";

import AnimalCard from "components/AnimalCard/AnimalCard";
import { animalsData } from "./data";
import "./styles.css";
import type { Animal } from "./types";

function Homework07() {
  const animals: JSX.Element[] = animalsData.map(
    (animal: Animal): JSX.Element => {
      return (
        <AnimalCard
          key={v4()}
          animalName={animal.name}
          animalSpecies={animal.species}
          animalImg={animal.image}
        />
      );
    }
  );

  return <div className="homework07-wrapper">{animals}</div>;
}

export default Homework07;