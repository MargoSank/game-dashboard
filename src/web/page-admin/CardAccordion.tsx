import {SyntheticEvent, useState} from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import {Button, Stack, TextField} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import {GameItem} from "../../core/interfaces";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export interface CardAccordionProps {
    game: GameItem;
    header: string;
    body?: string;
    isNewGame?: boolean;
    onSave: (game: GameItem) => void;
    onDelete: (gameId: GameItem['id']) => void;
}

export const CardAccordion = (props: CardAccordionProps) => {
    const [expanded, setExpanded] = useState<number | false>(false);
    const [name, setName] = useState(props.game.gameName)
    const [image, setImage] = useState(props.game.img)
    const [inputError, setInputError] = useState(false)

    const nameHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const imageHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    };
    const handleChange = (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const saveHandler = () => {
        if (name && image) {
            props.onSave({
                id: props.game.id,
                gameName: name,
                img: image
            })
            setInputError(false)
            if (props.isNewGame) {
                setName('');
                setImage('')
            }
        } else {
            setInputError(true)
        }
    }

    const deleteHandler = () => {
        props.onDelete(props.game.id)
    }

    return (
        <Accordion key={props.game.id}
                   expanded={expanded === props.game.id}
                   onChange={handleChange(props.game.id)}
                   elevation={5}
                   sx={{marginTop: 1, marginBottom: 1, cursor: 'move'}}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                {!props.isNewGame && <>
                    <DragIndicatorIcon sx={{marginRight: '5px'}}/>
                </>}
                <Typography sx={{width: '70%', flexShrink: 0}}>{props.header}</Typography>
                <Typography sx={{color: 'text.secondary'}}>{props.body}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack direction="row" spacing={2}>
                    <TextField
                        required
                        error={inputError && name.length === 0}
                        id="game-name-required"
                        label="Game name"
                        value={name}
                        onChange={nameHandle}
                        inputProps={{maxLength: 32}}
                    />
                    <TextField
                        required
                        error={inputError && image.length === 0}
                        id="game-image-required"
                        label="Image URL"
                        value={image}
                        onChange={imageHandle}
                    />
                    {!props.isNewGame && <>
                        <Button variant="contained" onClick={saveHandler}>update </Button>
                        <Button variant="contained" onClick={deleteHandler}>delete</Button>
                    </>}
                    {props.isNewGame && <Button variant="contained" onClick={saveHandler}>add game</Button>}
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
};