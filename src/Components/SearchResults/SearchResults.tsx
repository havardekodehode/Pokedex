import { Pokemon } from "../../data/api";

export function SearchResults({
    results,
}: {
    results: Pokemon[];
}): JSX.Element {
    return (
        <div className="results">
            {results.map((pokemon) => (
                <li className="pokemonResults">
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
