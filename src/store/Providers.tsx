'use client'

import { useEffect } from "react";
import { store } from ".";
import { Provider } from "react-redux";
import { setFavoritePokemons } from "./pokemons/pokemons";

interface Props {
    children: React.ReactNode;

}


export const Providers = ({ children }: Props) => {

    useEffect(() => {
        const favoritePokemons = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
        store.dispatch(store.dispatch(setFavoritePokemons(favoritePokemons)));
    }, [])

    return <Provider store={store}>
        {children}
    </Provider>
}