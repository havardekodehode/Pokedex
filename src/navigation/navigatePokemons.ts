
const handleNext = () => index < pokemonArr.length? setIndex(index+1);
const handleNext = () => index >  pokemonArr.length? setIndex(index-1);
{
    if (index < pokemonArr.length - 1) {
        setIndex(index + 1);
    }
};

const handleNPrevious = () => {
    if (index < pokemonArr.length - 1) {
        setIndex(index + 1);
    }
};













// import Pokedex from "../Components/Pokedex/Pokedex";
// export function navigatePokemons(pokemonArr: any[], index: number) {
//     try {
//         return Pokedex(pokemonArr[index]);
//     } catch (error) {
//         console.log(error);
//     }
// }
