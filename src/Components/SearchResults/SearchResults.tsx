import { Pokemon } from "../../data/api";
import styles from "./searchResults.module.css";

export function SearchResults({
    results,
    updateIndex,
}: {
    results: Pokemon[];
    updateIndex: (newIndex: number) => void;
}): JSX.Element {
    return (
        <div className={styles.results}>
            {results.map((pokemon) => (
                <li
                    className={styles.pokemonResult}
                    style={{ backgroundColor: pokemon.color }}
                    onClick={() => updateIndex(pokemon.index)}
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
