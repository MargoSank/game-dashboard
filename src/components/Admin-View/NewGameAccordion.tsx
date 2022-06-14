import {PropsWithChildren} from "react";
import {CardAccordion} from "./CardAccordion";
import {GameItem} from "../../interfaces";


export interface NewGameAccordionProps {
    onCreate: (game: GameItem) => void;
}

export const NewGameAccordion = (props: PropsWithChildren<NewGameAccordionProps>) => {
    const emptyGame = {
        id: -1,
        gameName: "",
        img: ""
    }

    return <CardAccordion
        key="new"
        game={emptyGame}
        header="Create a new game"
        body="open to add"
        isNewGame={true}
        onSave={props.onCreate}
    >
    </CardAccordion>;
}