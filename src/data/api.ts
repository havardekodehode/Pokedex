import { pokemonUrl, typeColors } from "./data";
import {
    PokemonApiResponse,
    PokemonDataApi,
    PokemonDetailsApi,
} from "./apiInterfaces";
export interface Pokemon {
    name: string;
    index: number;
    sprite: string;
    alt: string;
    color: string;
    stats: Array<{ name: string; value: number }>;
}

async function getData(url: string): Promise<PokemonApiResponse> {
    //Should fix any
    const req = await fetch(url);
    const data = await req.json();
    return data;
}

async function getDetails(pokemonName: string): Promise<object> {
    //string???
    try {
        const data = await getData(pokemonUrl);
        const pokemonData = data.results;
        const pokemon = pokemonData.find(
            (pokemon) => pokemon.name === pokemonName
        ) as PokemonDataApi;
        const details = await getData(pokemon.url);
        return details;
    } catch (error) {
        alert("Something went wrong: " + error);
        console.log(error);
        throw error;
    }
}

async function fetchData(): Promise<Pokemon[]> {
    const data = await getData(pokemonUrl);
    const pokemonData = data.results;

    const promises = pokemonData.map(async (pokemon, index) => {
        const details = (await getDetails(pokemon.name)) as PokemonDetailsApi;
        const sprite = details.sprites.other["official-artwork"].front_default;
        const type = details.types[0].type.name;
        const typeEntry = typeColors.find((entry) => entry.type === type);
        const color = typeEntry ? `#${typeEntry.color}` : "#000000";
        const stats = details.stats.map(({ base_stat, stat }) => ({
            name: stat.name,
            value: base_stat,
        }));
        return {
            name: pokemon.name,
            index: index,
            sprite: sprite,
            alt: `Sprite of ${pokemon.name}`,
            color: color,
            stats: stats,
        };
    });

    return Promise.all(promises);
}

export { fetchData };
