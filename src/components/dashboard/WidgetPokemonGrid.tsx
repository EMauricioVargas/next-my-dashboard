'use client';

import { PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";

export const WidgetPokemonGrid = () => {
    const pokemons = useAppSelector(state => state.pokemons);

    return (
        <span className="text-5xl my-2">
            Listado de Pokemons <small className="text-blue-500">Global state</small>
            <PokemonGrid pokemons={Object.values(pokemons.favorites)}></PokemonGrid>
        </span>
    )
}