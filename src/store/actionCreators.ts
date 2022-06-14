import {DispatchType, GameAction, GameItem} from "../interfaces";
import {ADD_GAME, REMOVE_GAME, REORDER_GAME} from "./actionTypes";

export function addGame(game: GameItem) {
    return {
        type: ADD_GAME,
        game,
    };
}

export function removeArticle(game: GameItem) {
    return {
        type: REMOVE_GAME,
        game,
    };
}


export function updateArticle(game: GameItem) {
    return {
        type: REORDER_GAME,
        game,
    };
}

export function simulateHttpRequest(action: GameAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}