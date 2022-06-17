import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import rootReducer from "../reducers/rootReducer";


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
