import { ReactNode, createContext, useContext, useState } from "react";

type PokemonContextType = {
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
};

const defaultContextValue: PokemonContextType = {
    index: 0,
    setIndex: () => {}, // Placeholder function
};

const pokemonContext = createContext<PokemonContextType>(defaultContextValue);

export function PokemonContextProvider({ children }: { children: ReactNode }) {
    const [index, setIndex] = useState<number>(0);

    const value = { index, setIndex };

    return (
        <pokemonContext.Provider value={value}>
            {children}
        </pokemonContext.Provider>
    );
}

export function usePokemonContext() {
    return useContext(pokemonContext);
}
