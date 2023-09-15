import { useState, useEffect } from "react";
import { fetchData } from "../../data/api.ts";
import Pokedex from "../Pokedex/Pokedex.tsx";
import { Search } from "./Search.tsx";
import Loading from "./Loading.tsx";
import { Pokemon } from "../../data/api.ts";
import styles from "./pokedexContainer.module.css";
import { usePokemonContext } from "../../contexts/contexts.tsx";
// import "../../css/media-queries.css";

export function PokedexContainer(): JSX.Element {
    const [dataFetched, setDataFetched] = useState<boolean>(false);
    const [pokemonArr, setPokemonArr] = useState<Pokemon[]>([]);

    //context
    const { index, setIndex } = usePokemonContext();

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const direction = event.currentTarget.getAttribute("data-direction");
        if (direction === "next") {
            setIndex((oldIndex) =>
                oldIndex < pokemonArr.length - 1 ? oldIndex + 1 : oldIndex
            );
        } else if (direction === "previous") {
            setIndex((oldIndex) => (oldIndex > 0 ? oldIndex - 1 : oldIndex));
        }
    };

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
                <button
                    onClick={handleButtonClick}
                    id="prev"
                    data-direction="previous"
                >
                    &lt;
                </button>
                <Pokedex pokemon={pokemonArr[index]} />
                <button
                    onClick={handleButtonClick}
                    id="next"
                    data-direction="next"
                >
                    &gt;
                </button>
            </div>
        </main>
    );
}
