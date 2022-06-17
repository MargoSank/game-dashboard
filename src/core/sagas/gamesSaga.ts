import {all, call, fork, put, takeEvery, takeLatest} from "redux-saga/effects";
import {addGame, deleteGame, reorderGames, updateGame} from "../services/gamesServices";
import * as actionCreators from "../actionCreators/gamesActionCreators";
import * as actionTypes from "../actionTypes/gamesActionTypes";

function* onAddGame({game}: actionTypes.AddGameAction) {
    try {
        yield put(actionCreators.addGameRequest());
        const {game: gameFromServer} = yield call(addGame, game);
        yield put(actionCreators.addGameSuccess(gameFromServer));
    } catch (error) {
        yield put(actionCreators.addGameFailure("Error in add new game"));
    }
}

function* onDeleteGame({gameId}: actionTypes.DeleteGameAction) {
    try {
        yield put(actionCreators.deleteGameRequest());
        yield call(deleteGame);
        yield put(actionCreators.deleteGameSuccess(gameId));
    } catch (error) {
        yield put(actionCreators.deleteGameFailure("Error in deleting game"));
    }
}


function* onUpdateGame({game}: actionTypes.UpdateGameAction) {
    try {
        yield put(actionCreators.updateGameRequest());
        yield call(updateGame);
        yield put(actionCreators.updateGameSuccess(game));
    } catch (error) {
        yield put(actionCreators.deleteGameFailure("Error in updating game"));
    }
}

function* onReorderGames({gamesIds}: actionTypes.ReorderGamesAction) {
    try {
        yield put(actionCreators.reorderGamesRequest());
        yield call(reorderGames);
        yield put(actionCreators.reorderGamesSuccess(gamesIds));
    } catch (error) {
        yield put(actionCreators.reorderGamesFailure("Error in reordering games"));
    }
}


function* watchOnGames() {
    yield takeEvery(actionTypes.ADD_GAME, onAddGame);
    yield takeEvery(actionTypes.DELETE_GAME, onDeleteGame);
    yield takeEvery(actionTypes.UPDATE_GAME, onUpdateGame);
    yield takeLatest(actionTypes.REORDER_GAMES, onReorderGames);
}

export function* gamesSaga() {
    yield all([fork(watchOnGames)]);
}