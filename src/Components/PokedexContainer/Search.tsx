import { Pokemon } from "../../data/api";
import { useState } from "react";
import { SearchResults } from "../SearchResults/SearchResults";

export function Search({ pokemonArr }: { pokemonArr: Pokemon[] }): JSX.Element {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
    };

    const filteredResults =
        inputValue.length > 0 ? filterOnSearch(pokemonArr, inputValue) : [];

    return (
        <div className=" searchContainer visible">
            <input
                onChange={handleInputChange}
                value={inputValue}
                type="text"
                id="search"
                // className="search"
            />
            {inputValue.length > 0 ? (
                <SearchResults results={filteredResults} />
            ) : null}
        </div>
    );

    function filterOnSearch(pokemonArray: Pokemon[], query: string): Pokemon[] {
        return pokemonArray.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(query.toLowerCase())
        );
    }
}
