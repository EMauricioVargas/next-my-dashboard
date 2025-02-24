import { PokemonGrid } from "@/pokemons";

export const metadata = {
    title: 'Favoritos',
    description: ''
};




export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Listado de Pokemons <small className="text-blue-500">Global state</small>
                <PokemonGrid pokemons={[]}></PokemonGrid>
            </span>
        </div>
    )
}