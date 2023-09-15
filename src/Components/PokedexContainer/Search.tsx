import { Pokemon } from "../../data/api";
import { useEffect, useState } from "react";
import { SearchResults } from "../SearchResults/SearchResults";
import styles from "./search.module.css";

export function Search({
    pokemonArr,
    dataFetched,
}: {
    pokemonArr: Pokemon[];
    dataFetched: boolean;
}): JSX.Element {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
    };

    const filteredResults =
        inputValue.length > 0 ? filterOnSearch(pokemonArr, inputValue) : [];

    useEffect(() => {
        const handleGlobalClick = (e: MouseEvent) => {
            const searchContainer = document.querySelector(
                `.${styles.searchContainer}`
            );

            if (
                searchContainer &&
                e.target instanceof Node &&
                !searchContainer.contains(e.target)
            ) {
                setInputValue("");
            }
        };

        // Add the event listener when the component mounts
        window.addEventListener("click", handleGlobalClick);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("click", handleGlobalClick);
        };
    }, []);

    return (
        <div
            className={`${styles.searchContainer} ${
                dataFetched ? "visible" : ""
            }`}
        >
            <input
                onChange={handleInputChange}
                value={inputValue}
                type="text"
                id="search"
                className={styles.search}
            />
            {inputValue.length > 0 ? (
                <SearchResults results={filteredResults} />
            ) : null}
            {/* {inputValue.length > 0 ? (
                <SearchResults results={filteredResults} />
            ) : null} */}
        </div>
    );

    function filterOnSearch(pokemonArray: Pokemon[], query: string): Pokemon[] {
        return pokemonArray.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(query.toLowerCase())
        );
    }
}
