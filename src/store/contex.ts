import {GameItem} from "../interfaces";
import {createContext} from "react";
const initialState = require("../data/Games.json").games;

export const initialContext = {
    games: initialState,
    addGame: (game: GameItem) => {
        console.log("addGame", game)
    },
    deleteGame: (id: number) => {
        console.log('deleteGame', id)
    },
    reorderGame: (games: GameItem[]) => {
        console.log('reorderGame', games)
    },
}

export const AppCtx = createContext<{
    games: GameItem[],
    addGame: (game: GameItem) => any,
    deleteGame: (id: number) => any,
    reorderGame: (games: GameItem[]) => any
}>(initialContext);

