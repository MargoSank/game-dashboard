import {PropsWithChildren} from "react";
import {Card, CardActionArea, CardMedia, Typography} from "@mui/material";

export interface CardProps {
    gameName: string;
    img: string;
}

export const CardGame = (props: PropsWithChildren<CardProps>) => {
    return < >
        <Card raised={true} sx={{
            "&:hover": {
                transform: 'scale(1.1)'
            }
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.img}
                    alt={`Logo of ${props.gameName}`}
                    sx={{minHeight: "200px"}}
                />
                <Typography noWrap={true} sx={{fontSize: 14, margin: 1}}>
                    {props.gameName}
                </Typography>
            </CardActionArea>
        </Card>
    </ >
};