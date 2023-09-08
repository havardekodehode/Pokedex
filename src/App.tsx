import { Layout } from "./Components/Layout/Layout";
import { PokedexContainer } from "./Components/PokedexContainer/PokedexContainer";
import "./css/index.css";
import "./css/animations.css";
import "./css/index.css";
import "./css/media-quries.css";
import "./css/navigation.css";
import "./css/typography.css";
import "./css/variables.css";

function App(): JSX.Element {
    return (
        <Layout>
            <PokedexContainer />
        </Layout>
    );
}

export default App;
