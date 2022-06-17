import * as actions from "../actionTypes/gamesActionTypes";
import {GameItem} from "../interfaces";

// ADD new game
export function addGame(game: GameItem): actions.AddGameAction {
    return {
        type: actions.ADD_GAME,
        game: game
    };
}

export function addGameRequest(): actions.AddGameRequestAction {
    return {
        type: actions.ADD_GAME_REQUEST
    };
}

export function addGameSuccess(newGame: GameItem): actions.AddGameSuccessAction {
    return {
        type: actions.ADD_GAME_SUCCESS,
        game: newGame,
    };
}

export function addGameFailure(error: string): actions.AddGameFailureAction {
    return {
        type: actions.ADD_GAME_FAILURE,
        error
    };
}

// DELETE game by ID
export function deleteGame(gameId: GameItem["id"]): actions.DeleteGameAction {
    return {
        type: actions.DELETE_GAME,
        gameId
    };
}

export function deleteGameRequest(): actions.DeleteGameRequestAction {
    return {
        type: actions.DELETE_GAME_REQUEST
    };
}

export function deleteGameSuccess(gameId: GameItem["id"]): actions.DeleteGameSuccessAction {
    return {
        type: actions.DELETE_GAME_SUCCESS,
        gameId
    };
}

export function deleteGameFailure(error: string): actions.DeleteGameFailureAction {
    return {
        type: actions.DELETE_GAME_FAILURE,
        error
    };
}

// UPDATE game
export function updateGame(game: GameItem): actions.UpdateGameAction {
    return {
        type: actions.UPDATE_GAME,
        game
    };
}

export function updateGameRequest(): actions.UpdateGameRequestAction {
    return {
        type: actions.UPDATE_GAME_REQUEST
    };
}

export function updateGameSuccess(game: GameItem): actions.UpdateGameSuccessAction {
    return {
        type: actions.UPDATE_GAME_SUCCESS,
        game
    };
}

export function updateGameFailure(error: string): actions.UpdateGameFailureAction {
    return {
        type: actions.UPDATE_GAME_FAILURE,
        error
    };
}

// REORDER games
export function reorderGames(gamesIds: GameItem['id'][]): actions.ReorderGamesAction {
    return {
        type: actions.REORDER_GAMES,
        gamesIds
    };
}

export function reorderGamesRequest(): actions.ReorderGamesRequestAction {
    return {
        type: actions.REORDER_GAMES_REQUEST
    };
}

export function reorderGamesSuccess(gamesIds: GameItem['id'][]): actions.ReorderGamesSuccessAction {
    return {
        type: actions.REORDER_GAMES_SUCCESS,
        gamesIds
    };
}

export function reorderGamesFailure(error: string): actions.ReorderGamesFailureAction {
    return {
        type: actions.REORDER_GAMES_FAILURE,
        error
    };
}

