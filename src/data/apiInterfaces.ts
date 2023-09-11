export interface PokemonApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonDataApi[];
}

export interface PokemonDataApi {
    name: string;
    url: string;
}

export interface PokemonDetailsApi {
    abilities: any[];
    base_experience: number;
    forms: any[];
    game_indices: any[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    name: string;
    order: number;
    past_types: any[];
    species: string;
    sprites: Sprites;
    stats: any[];
    types: any[];
    weight: number;
}

interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: Record<string, any>;
    versions: Record<string, any>;
}
