export interface GameItem {
    id: number;
    gameName: string;
    img: string;
}

export interface GamesState {
    games: GameItem[]
}

export interface GameActionBase {
    type: string//"ADD_GAME"| "REMOVE_GAME" | "REORDER_GAME"
}

export interface GameActionAddGame extends GameActionBase{
    payload: GameItem
}

export interface GameActionDeleteGame extends GameActionBase{
    payload: GameItem
}

export type GameAction = GameActionAddGame | GameActionDeleteGame;

export type DispatchType = (args: GameAction) => GameAction