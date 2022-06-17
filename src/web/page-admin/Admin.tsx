import update from 'immutability-helper'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TouchBackend} from 'react-dnd-touch-backend'
import {isMobile} from 'react-device-detect';
import {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {DragDropArea} from './DragDropArea'
import {GameItem} from "../../core/interfaces";
import {Box} from "@mui/material";
import {CardAccordion} from "./CardAccordion";
import {NewGameAccordion} from "./NewGameAccordion";
import {DndProvider} from "react-dnd";
import {RootState} from "../../core/store/store";
import {addGame, deleteGame, reorderGames, updateGame} from "../../core/actionCreators/gamesActionCreators";


export const Admin = () => {
    const dispatch = useDispatch()
    const games = useSelector((state: RootState) => state.games)
    const [gameCards, setGameCards] = useState(games)

    useEffect(() => {
        setGameCards(games)
    }, [games])

    useEffect(() => {
        dispatch(reorderGames(gameCards.map(game => game.id)))
    }, [JSON.stringify(gameCards)])

    const updateGameHandler = (game: GameItem) => {
        dispatch(updateGame(game))
    }

    const newGameHandler = (game: GameItem) => {
        dispatch(addGame(game))
    }

    const deleteGameHandler = (gameId: GameItem['id']) => {
        dispatch(deleteGame(gameId))
    }

    const moveGameCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setGameCards((prevCards: GameItem[]) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex] as GameItem],
                ],
            }),
        )
    }, [])

    const renderGameAccordion = useCallback(
        (game: GameItem, index: number) => {
            console.log(game)
            return (
                <DragDropArea
                    key={game.id}
                    index={index}
                    id={game.id}
                    moveCardAccordion={moveGameCard}
                >
                    <CardAccordion
                        key={game.id}
                        game={game}
                        header={game.gameName}
                        onSave={updateGameHandler}
                        onDelete={deleteGameHandler}
                    />
                </DragDropArea>
            )
        },
        [],
    )

    return (
        <Box
            sx={{
                marginTop: 1,
                marginBottom: 5,
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: 700,
            }}
        >
            <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
                {gameCards.map((card, i) => renderGameAccordion(card, i))}
            </DndProvider>
            <NewGameAccordion onCreate={newGameHandler}/>
        </Box>
    )
}
