import update from 'immutability-helper'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TouchBackend} from 'react-dnd-touch-backend'
import {isMobile} from 'react-device-detect';
import {useCallback, useContext, useEffect, useState} from 'react'
import {useDispatch, useStore, useSelector} from 'react-redux'

import {DragDropArea} from './DragDropArea'
import {GameItem} from "../../interfaces";
import {Box, Button} from "@mui/material";
import {CardAccordion} from "./CardAccordion";
import {AppCtx} from "../../store/contex";
import {NewGameAccordion} from "./NewGameAccordion";
import {DndProvider} from "react-dnd";
import {addGame, updateGame} from "../../store/gamesSlice";
import {RootState} from "../../store/store";


export const Admin = () => {
    const games = useSelector((state: RootState) => state.gamesSlice.games)
    const dispatch = useDispatch()

    const [editCards, setEditCards] = useState(games)

    useEffect(()=>{
        setEditCards(games)
    }, [games])
    // const {games, reorderGame} = useContext(AppCtx);




    const moveEditingCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setEditCards((prevCards: GameItem[]) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex] as GameItem],
                ],
            }),
        )
        // dispatch()
    }, [])

    const updateHandler = (game: GameItem) => {
        dispatch(updateGame(game))
    }

    const newGameHandler = (game: GameItem) => {
        dispatch(addGame(game))
    }

    const renderCardAccordion = useCallback(
        (game: GameItem, index: number) => {
            return (
                <DragDropArea
                    key={game.id}
                    index={index}
                    id={game.id}
                    moveCardAccordion={moveEditingCard}
                >
                    <CardAccordion
                        key={game.id}
                        game={game}
                        header={game.gameName}
                        body='move to reorder'
                        onSave={updateHandler}
                    >
                    </CardAccordion>
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
                {editCards.map((card, i) => renderCardAccordion(card, i))}
            </DndProvider>

            <NewGameAccordion onCreate={newGameHandler}/>
            <Button
                fullWidth={true}
                size='large'
                variant="contained"
                sx={{marginTop: 1}}
                onClick={() => {}}
            >
                Save order
            </Button>
            {/*{reorderGame(editCards)}*/}
        </Box>
    )
}
