import {PropsWithChildren, SyntheticEvent, useContext, useState} from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import {Button, Stack, TextField} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import {GameItem} from "../../interfaces";
import {AppCtx} from "../../store/contex";
import {addGame} from "../../store/actionCreators";


export interface CardAccordionProps {
    game: GameItem;
    header: string;
    body: string;
    isNewGame?: boolean;
    onSave: (game: GameItem) => void;
}

export const CardAccordion = (props: PropsWithChildren<CardAccordionProps>) => {
    const [expanded, setExpanded] = useState<number | false>(false);
    const [name, setName] = useState(props.game.gameName)
    const [image, setImage] = useState(props.game.img)
    const {deleteGame} = useContext(AppCtx);

    const nameHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const imageHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    };

    const saveHandler = () =>{
        props.onSave({
            id: props.game.id,
            gameName: name,
            img: image
        })
    }

    const handleChange = (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion key={props.game.id}
                   expanded={expanded === props.game.id}
                   onChange={handleChange(props.game.id)}
                   elevation={5}
                   sx={{marginTop: 1, marginBottom: 1, cursor: 'move'}}
        >

            <AccordionSummary id={props.game.id.toString()} expandIcon={<ExpandMoreIcon/>}>
                <Typography sx={{width: '70%', flexShrink: 0}}>{props.header}</Typography>
                <Typography sx={{color: 'text.secondary'}}>{props.body}</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Stack direction="row" spacing={2}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        defaultValue={name}
                        onChange={nameHandle}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Image URL"
                        defaultValue={image}
                        onChange={imageHandle}
                    />

                    {!props.isNewGame && <>
                        <Button variant="contained" onClick={saveHandler}>update </Button>
                        <Button variant="contained" onClick={() => deleteGame(props.game.id)}> delete </Button>
                    </>}
                    {props.isNewGame && <Button variant="contained" onClick={saveHandler}>add game</Button>}
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
};