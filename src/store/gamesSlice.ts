import { createSlice } from '@reduxjs/toolkit'
import {GameAction, GameActionAddGame, GameActionDeleteGame, GameItem} from "../interfaces";
const initialState = require("../data/Games.json").games  as GameItem[];

export const gamesSlice = createSlice({
    name: 'gamesSlice',
    initialState: {
        games: initialState
    },
    reducers: {
        addGame: (state, action: GameActionAddGame) => {
            action.payload.id = Math.max(...state.games.map(g => g.id)) +1;
            state.games.push(action.payload)
        },
        deleteGame: (state, action: GameActionDeleteGame) => {
            const filteredGames: GameItem[] = state.games.filter(
                game => game.id !== action.payload.id
            )
            state.games = filteredGames;
        },
        updateGame: (state, action: GameAction) => {
            const idx = state.games.findIndex(
                game => game.id === action.payload.id
            )
            const x = state.games.slice()
            x[idx] = action.payload
            return {games: x}
        },
        reorderGames: (state, action: GameAction) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const { addGame, deleteGame, updateGame } = gamesSlice.actions

export const gamesSliceReducer = gamesSlice.reducer