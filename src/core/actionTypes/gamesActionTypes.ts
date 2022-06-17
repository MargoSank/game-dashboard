import {GameItem} from "../interfaces";

export const ADD_GAME = "gamesActionTypes/ADD_GAME";

export interface AddGameAction {
    type: typeof ADD_GAME;
    game: GameItem;
}

export const ADD_GAME_REQUEST = "gamesActionTypes/ADD_GAME_REQUEST";

export interface AddGameRequestAction {
    type: typeof ADD_GAME_REQUEST;
}

export const ADD_GAME_SUCCESS = "gamesActionTypes/ADD_GAME_SUCCESS";

export interface AddGameSuccessAction {
    type: typeof ADD_GAME_SUCCESS;
    game: GameItem;
}

export const ADD_GAME_FAILURE = "gamesActionTypes/ADD_GAME_FAILURE";

export interface AddGameFailureAction {
    type: typeof ADD_GAME_FAILURE;
    error: string;
}

export const DELETE_GAME = "gamesActionTypes/DELETE_GAME";

export interface DeleteGameAction {
    type: typeof DELETE_GAME;
    gameId: GameItem["id"];
}

export const DELETE_GAME_REQUEST = "gamesActionTypes/DELETE_GAME_REQUEST";

export interface DeleteGameRequestAction {
    type: typeof DELETE_GAME_REQUEST;
}

export const DELETE_GAME_SUCCESS = "gamesActionTypes/DELETE_GAME_SUCCESS";

export interface DeleteGameSuccessAction {
    type: typeof DELETE_GAME_SUCCESS;
    gameId: GameItem["id"];
}

export const DELETE_GAME_FAILURE = "gamesActionTypes/DELETE_GAME_FAILURE";

export interface DeleteGameFailureAction {
    type: typeof DELETE_GAME_FAILURE;
    error: string;
}

export const UPDATE_GAME = "gamesActionTypes/UPDATE_GAME";

export interface UpdateGameAction {
    type: typeof UPDATE_GAME;
    game: GameItem;
}

export const UPDATE_GAME_REQUEST = "gamesActionTypes/UPDATE_GAME_REQUEST";

export interface UpdateGameRequestAction {
    type: typeof UPDATE_GAME_REQUEST;
}

export const UPDATE_GAME_SUCCESS = "gamesActionTypes/UPDATE_GAME_SUCCESS";

export interface UpdateGameSuccessAction {
    type: typeof UPDATE_GAME_SUCCESS;
    game: GameItem;
}

export const UPDATE_GAME_FAILURE = "gamesActionTypes/UPDATE_GAME_FAILURE";

export interface UpdateGameFailureAction {
    type: typeof UPDATE_GAME_FAILURE;
    error: string;
}

export const REORDER_GAMES = "gamesActionTypes/REORDER_GAMES";

export interface ReorderGamesAction {
    type: typeof REORDER_GAMES;
    gamesIds: GameItem['id'][];
}

export const REORDER_GAMES_REQUEST = "gamesActionTypes/REORDER_GAMES_REQUEST";

export interface ReorderGamesRequestAction {
    type: typeof REORDER_GAMES_REQUEST;
}

export const REORDER_GAMES_SUCCESS = "gamesActionTypes/REORDER_GAMES_SUCCESS";

export interface ReorderGamesSuccessAction {
    type: typeof REORDER_GAMES_SUCCESS;
    gamesIds: GameItem['id'][];
}

export const REORDER_GAMES_FAILURE = "gamesActionTypes/REORDER_GAMES_FAILURE";

export interface ReorderGamesFailureAction {
    type: typeof REORDER_GAMES_FAILURE;
    error: string;
}

export type GamesAction =
    | AddGameAction
    | AddGameRequestAction
    | AddGameSuccessAction
    | AddGameFailureAction
    | DeleteGameAction
    | DeleteGameRequestAction
    | DeleteGameSuccessAction
    | DeleteGameFailureAction
    | UpdateGameAction
    | UpdateGameRequestAction
    | UpdateGameSuccessAction
    | UpdateGameFailureAction
    | ReorderGamesAction
    | ReorderGamesRequestAction
    | ReorderGamesSuccessAction
    | ReorderGamesFailureAction;
