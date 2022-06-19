import {runSaga} from "redux-saga";
import * as api from '../core/services/gamesServices'
import {onAddGame, onGetGames, onDeleteGame, onUpdateGame, onReorderGames} from "../core/sagas/gamesSaga";
import * as actionCreators from "../core/actionCreators/gamesActionCreators";
import {addGame, deleteGame, getGames, reorderGames, updateGame} from "../core/actionCreators/gamesActionCreators";
import {GameItem} from "../core/interfaces";
const initialState = require("../core/data/Games.json").games as GameItem[];

describe('makeAuthorsApiRequest', () => {
    it('should call api and received games', async () => {
        const requestAuthors = jest.spyOn(api, 'getGames')
            .mockImplementation(() => Promise.resolve({games: initialState}));
        const dispatched: any[] = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, onGetGames, getGames());

        expect(requestAuthors).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([
            actionCreators.getGamesRequest(),
            actionCreators.getGamesSuccess(initialState)
        ]);
        requestAuthors.mockClear();
    });

    it('should call api and add a new game', async () => {
        const game: GameItem = {id: 2, gameName: 'abc', img: "abc"};
        const requestAuthors = jest.spyOn(api, 'addGame')
            .mockImplementation(() => Promise.resolve({game}));
        const dispatched: any[] = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, onAddGame, addGame(game));

        expect(requestAuthors).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([
            actionCreators.addGameRequest(),
            actionCreators.addGameSuccess(game)
        ]);
        requestAuthors.mockClear();
    });

    it('should call api and deleted the game', async () => {
        const game: GameItem = {id: 2, gameName: 'abc', img: "abc"};
        const requestAuthors = jest.spyOn(api, 'deleteGame')
            .mockImplementation(() => Promise.resolve({}));
        const dispatched: any[] = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, onDeleteGame, deleteGame(game.id));

        expect(requestAuthors).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([
            actionCreators.deleteGameRequest(),
            actionCreators.deleteGameSuccess(game.id)
        ]);
        requestAuthors.mockClear();
    });

    it('should call api and updated the game', async () => {
        const game: GameItem = {id: 2, gameName: 'abc', img: "abc"};
        const requestAuthors = jest.spyOn(api, 'updateGame')
            .mockImplementation(() => Promise.resolve({}));
        const dispatched: any[] = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, onUpdateGame, updateGame(game));

        expect(requestAuthors).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([
            actionCreators.updateGameRequest(),
            actionCreators.updateGameSuccess(game)
        ]);
        requestAuthors.mockClear();
    });

    it('should call api and reorder games', async () => {
        const gamesIds: GameItem['id'][] = [1,3,2];
        const requestAuthors = jest.spyOn(api, 'reorderGames')
            .mockImplementation(() => Promise.resolve({}));
        const dispatched: any[] = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, onReorderGames, reorderGames(gamesIds));

        expect(requestAuthors).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([
            actionCreators.reorderGamesRequest(),
            actionCreators.reorderGamesSuccess(gamesIds)
        ]);
        requestAuthors.mockClear();
    });
});