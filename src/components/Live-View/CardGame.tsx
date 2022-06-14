// import styled from 'styled-components'
import {PropsWithChildren} from "react";
import {Card, CardMedia, Typography} from "@mui/material";

export interface CardProps {
    gameName: string;
    img: string;
}

export const CardGame = (props: PropsWithChildren<CardProps>) => < >
    <Card elevation={3}>
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
    </Card>
</ >;