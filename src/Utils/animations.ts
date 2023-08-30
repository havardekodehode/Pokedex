import {
    animatedPokeballContainer,
    mainContainer,
    searchContainerEl,
} from "./HTMLElements.ts";
export function transistion() {
    animatedPokeballContainer.classList.toggle("fadeOut");
    animatedPokeballContainer.style.display = "none";
    mainContainer.classList.toggle("visible");
    searchContainerEl.classList.toggle("visible");
}
