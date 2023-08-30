import { Pokemon } from "../../data/api";

function PokemonHeader({ pokemon }: { pokemon: Pokemon }): JSX.Element {
    return (
        <>
            <h3 style={{ textAlign: "center" }}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h3>
            <img
                className={`pokemon ${pokemon.name}`}
                src={pokemon.sprite}
                alt={`Sprite of ${pokemon.name}`}
            />
        </>
    );
}

export default PokemonHeader;
