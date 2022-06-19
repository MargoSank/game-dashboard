import {GameItem} from "../interfaces";
const initialState = require("../data/Games.json").games as GameItem[];

interface GetGamesResponse {
    games: GameItem[]
}

interface AddGameResponse {
    game: GameItem
}

interface GameResponse {
}

export async function getGames(): Promise<GetGamesResponse> {
    return new Promise((resolve) => {
        setTimeout(() => resolve({games: initialState}), 300)
    });
}

export async function addGame(game: GameItem): Promise<AddGameResponse> {
    const id = Math.floor(Math.random() * 10000);
    return new Promise((resolve) => {
        setTimeout(() => resolve({game: {...game, id}}), 300)
    });
}

export async function deleteGame(): Promise<GameResponse> {
    return new Promise((resolve) => {
        setTimeout(resolve, 300)
    });
}

export async function updateGame(): Promise<GameResponse> {
    return new Promise((resolve) => {
        setTimeout(resolve, 300)
    });
}

export async function reorderGames(): Promise<GameResponse> {
    return new Promise((resolve) => {
        setTimeout(resolve, 300)
    });
}
