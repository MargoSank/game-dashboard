import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import isLoadingReducer from "./isLoadingReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
