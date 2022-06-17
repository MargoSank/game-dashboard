import * as actions from "../actionTypes/gamesActionTypes";
import {GameItem} from "../interfaces";

const initialState = require("../data/Games.json").games as GameItem[];

export type GamesState = GameItem[];

export default function gamesReducer(
    state: GamesState = initialState,
    action: actions.GamesAction
): GamesState {
    switch (action.type) {
        case actions.ADD_GAME_SUCCESS:
            const newGame = action.game;
            return [...state, newGame];
        case actions.DELETE_GAME_SUCCESS:
            return state.filter(
                game => game.id !== action.gameId
            )
        case actions.UPDATE_GAME_SUCCESS:
            const idx = state.findIndex(
                game => game.id === action.game.id
            )
            const allGames = state.slice()
            allGames[idx] = action.game
            return allGames;
        case actions.REORDER_GAMES_SUCCESS:
            return action.gamesIds.map(id => {
                return state.find(game => game.id === id)!
            })
        default:
            return state;
    }
}
