import React from "react";
import { Pokemon } from "../../data/api";
import Stats from "./Stats";
import PokemonHeader from "./PokemonHeader";

interface RenderPokedexProps {
    pokemon: Pokemon | null;
}

function Pokedex({ pokemon }: RenderPokedexProps): JSX.Element | null {
    if (!pokemon) return null;

    return (
        <div className="pokedex" style={{ backgroundColor: pokemon.color }}>
            <div className="pokemonContainer flex-col just-cen alig-cen">
                <PokemonHeader pokemon={pokemon} />
                <Stats stats={pokemon.stats} />
            </div>
        </div>
    );
}

export default Pokedex;
