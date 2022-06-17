import {GameItem} from "../interfaces";

interface AddGameResponse {
    game: GameItem
}

interface GameResponse {
}

export async function addGame(game: GameItem): Promise<AddGameResponse> {
    const id = Math.floor(Math.random() * 999);
    return new Promise((resolve) => {
        setTimeout(() => resolve({game: {...game, id}}), 500)
    });
}

export async function deleteGame(): Promise<GameResponse> {
    return new Promise((resolve) => {
        setTimeout(resolve, 500)
    });
}

export async function updateGame(): Promise<GameResponse> {
    return new Promise((resolve) => {
        setTimeout(resolve, 500)
    });
}

export async function reorderGames(): Promise<GameResponse> {
    return new Promise((resolve) => {
        setTimeout(resolve, 500)
    });
}
