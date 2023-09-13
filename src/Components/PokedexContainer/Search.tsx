import { Pokemon } from "../../data/api";
import { useState } from "react";
import { SearchResults } from "../SearchResults/SearchResults";
import styles from "./search.module.css";

export function Search({
    pokemonArr,
    dataFetched,
    updateIndex,
}: {
    pokemonArr: Pokemon[];
    dataFetched: boolean;
    updateIndex: (newIndex: number) => void;
}): JSX.Element {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
    };

    const filteredResults =
        inputValue.length > 0 ? filterOnSearch(pokemonArr, inputValue) : [];

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
                <SearchResults results={filteredResults} updateIndex={updateIndex}/>
            ) : null}
        </div>
    );

    function filterOnSearch(pokemonArray: Pokemon[], query: string): Pokemon[] {
        return pokemonArray.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(query.toLowerCase())
        );
    }
}
