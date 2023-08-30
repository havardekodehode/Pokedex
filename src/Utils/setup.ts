import { filterOnSearch } from "./searchUtils"; // Update import path if needed
import {navigatePokemons} from "../navigation/navigatePokemons.ts"
import React from "react"; // Import React
import RenderPokedex from "../pages/pokedex"; // Import your RenderPokedex component

let index = 0;

export function setupEventListeners(pokemonArr: Pokemon[]): void {
  const searchInput = document.getElementById("search") as HTMLInputElement;
  const prevButton = document.getElementById("prev") as HTMLButtonElement;
  const nextButton = document.getElementById("next") as HTMLButtonElement;

  searchInput.addEventListener("input", (e) => {
    const filteredPokemons = filterOnSearch(pokemonArr, e.target.value);
    // Call a function to update the search results in your React component's state
  });

  document.addEventListener("click", (event) => {
    const resultContainer = document.querySelector(".results");
    if (resultContainer) {
      if (!(resultContainer as Node).contains(event.target as Node)) {
        resultContainer.remove();
      }
    }
  });

  prevButton.addEventListener("click", () => {
    navigateToPrevious(pokemonArr);
  });

  nextButton.addEventListener("click", () => {
    navigateToNext(pokemonArr);
  });
}

function navigateToPrevious(pokemonArr: Pokemon[]) {
  if (index !== 0) {
    index--;
    navigatePokemons(pokemonArr, index);
  }
}

function navigateToNext(pokemonArr: Pokemon[]) {
  if (index !== 151) {
    index++;
    navigatePokemons(pokemonArr, index);
  }
}
