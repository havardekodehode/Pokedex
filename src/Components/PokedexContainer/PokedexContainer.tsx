import { useState, useEffect } from "react";
import { fetchData } from "../../data/api.ts";
import Pokedex from "../Pokedex/Pokedex.tsx";
import { Search } from "./Search.tsx";
import Loading from "./Loading.tsx";
import { Pokemon } from "../../data/api.ts";
import styles from "./pokedexContainer.module.css";

export function PokedexContainer(): JSX.Element {
    const [dataFetched, setDataFetched] = useState<boolean>(false);
    const [pokemonArr, setPokemonArr] = useState<Pokemon[]>([]);

    // const function updateIndex()

    const [index, setIndex] = useState<number>(0);

    const handleNext = () =>
        index < pokemonArr.length ? setIndex(index + 1) : null;
    const handlePrevious = () => (index > 0 ? setIndex(index - 1) : null);

    useEffect(() => {
        fetchData()
            .then((fetchedPokemonArr) => {
                setPokemonArr(fetchedPokemonArr);
                setDataFetched(true);
            })
            .catch((error) => {
                setDataFetched(false);
                console.log(error);
            });
    }, []);

    return (
        <main className="flex-col just-sta alig-cen">
            <Search pokemonArr={pokemonArr} dataFetched={dataFetched} />
            {/* Loading Container */}
            {!dataFetched ? <Loading /> : null} {/* Main Container */}
            <div
                className={`${styles.dexContainer} ${
                    dataFetched ? "visible" : ""
                } flex-row just-cen alig-cen`}
            >
                <button onClick={handlePrevious} id="prev">
                    &lt;
                </button>
                <Pokedex pokemon={pokemonArr[index]} />
                <button onClick={handleNext} id="next">
                    &gt;
                </button>
            </div>
        </main>
    );
}
