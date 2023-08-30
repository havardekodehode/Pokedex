import { PropsWithChildren, useState, useEffect } from "react";
import { fetchData } from "../../data/api.ts";
import { navigatePokemons } from "../../navigation/navigatePokemons.ts";
import Pokedex from "../Pokedex/Pokedex.tsx";
import Search from "./Search.tsx";
import Loading from "./Loading.tsx";
function Main(): JSX.Element {
    const [dataFetched, setDataFetched] = useState<boolean>(false);
    const [pokemonArr, setPokemonArr] = useState<Pokemon[]>([]);

    const [index, setIndex] = useState<number>(0);
    const handleNext = () =>
        index < pokemonArr.length ? setIndex(index + 1) : null;
    const handlePrevious = () => (index > 0 ? setIndex(index - 1) : null);

    // useEffect(() => {

    //     async function init() {
    //         try {
    //             const fetchedPokemonArr = await fetchData();
    //             setPokemonArr(fetchedPokemonArr);
    //             setDataFetched(true);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     init();
    // });

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
            <Search />
            {/* Loading Container */}
            {!dataFetched ? <Loading /> : null} {/* Main Container */}
            {dataFetched ? (
                <div className="mainContainer visible flex-row just-cen alig-cen">
                    <button onClick={handlePrevious} id="prev">
                        &lt;
                    </button>
                    <div className="dexContainer">
                        <Pokedex pokemon={pokemonArr[index]} />
                    </div>
                    <button onClick={handleNext} id="next">
                        &gt;
                    </button>
                </div>
            ) : null}
        </main>
    );
}

export default Main;
