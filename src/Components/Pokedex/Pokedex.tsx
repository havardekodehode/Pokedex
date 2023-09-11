import { Pokemon } from "../../data/api";
import Stats from "./Stats";
import PokemonHeader from "./PokemonHeader";
import styles from "./pokedex.module.css";

interface RenderPokedexProps {
    pokemon: Pokemon | null;
}

function Pokedex({ pokemon }: RenderPokedexProps): JSX.Element | null {
    if (!pokemon) return null;

    return (
        <div
            className={`${styles.pokemonContainer} flex-col just-cen alig-cen`}
            style={{ backgroundColor: pokemon.color }}
        >
            <PokemonHeader pokemon={pokemon} />
            <Stats stats={pokemon.stats} />
        </div>
    );
}
export default Pokedex;
