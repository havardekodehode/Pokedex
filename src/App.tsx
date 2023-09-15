import { Layout } from "./Components/Layout/Layout";
import { PokedexContainer } from "./Components/PokedexContainer/PokedexContainer";
import { PokemonContextProvider } from "./contexts/contexts";
import "./css/media-queries.css";
import "./css/index.css";
import "./css/animations.css";
import "./css/navigation.css";
import "./css/typography.css";
import "./css/variables.css";

function App(): JSX.Element {
    return (
        <Layout>
            <PokemonContextProvider>
                <PokedexContainer />
            </PokemonContextProvider>
        </Layout>
    );
}

export default App;
