import { Pokemon } from "../../data/api";
import styles from "./searchResults.module.css";

export function SearchResults({
    results,
}: {
    results: Pokemon[];
}): JSX.Element {
    return (
        <div className={styles.results}>
            {results.map((pokemon) => (
                <li
                    className={styles.pokemonResult}
                    style={{ backgroundColor: pokemon.color }}
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
