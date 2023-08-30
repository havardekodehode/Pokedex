import React, { useEffect, useState } from "react";
import { navigatePokemons } from "./navigation/navigatePokemons";
import { fetchData } from "./data/api";
// import //eventlisteners
import { transistion } from "./Utils/animations";
// import "./App.css";
import "./css/index.css";
import "./css/animations.css";
import "./css/index.css";
import "./css/layout.css";
import "./css/media-quries.css";
import "./css/navigation.css";
import "./css/typography.css";
import "./css/variables.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Pokedex from "./Components/Pokedex/Pokedex";

function App(): JSX.Element {
    return (
        <div className="App">
            <Header />
            <Main></Main>
        </div>
    );
}

export default App;
