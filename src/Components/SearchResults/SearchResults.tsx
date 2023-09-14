import { usePokemonContext } from "../../contexts/contexts";
import { Pokemon } from "../../data/api";
import styles from "./searchResults.module.css";

export function SearchResults({
    results,
}: {
    results: Pokemon[];
}): JSX.Element {
    //context
    const { setIndex } = usePokemonContext();

    return (
        <div className={styles.results}>
            {results.map((pokemon) => (
                <li
                    key={pokemon.index}
                    className={styles.pokemonResult}
                    style={{ backgroundColor: pokemon.color }}
                    onClick={() => setIndex(pokemon.index)}
                >
                    <p className="name">{pokemon.name}</p>
                    <img
                        src={pokemon.sprite}
                        alt={`Image of ${pokemon.name}`}
                    />
                </li>
            ))}
        </div>
    );
}
