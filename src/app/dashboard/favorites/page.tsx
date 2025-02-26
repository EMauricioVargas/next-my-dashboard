

import { WidgetPokemonGrid } from "@/components/dashboard/WidgetPokemonGrid";

export const metadata = {
    title: 'Favoritos',
    description: ''
};


export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">
            <WidgetPokemonGrid></WidgetPokemonGrid>
        </div>
    )
}