import {Grid} from "@mui/material";
import {CardGame} from "./CardGame";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";


export const Live = () => {
    const games = useSelector((state: RootState) => state.gamesSlice.games)

    return <Grid container columnSpacing={4} rowSpacing={4}>
        {games.map(game => {
            return (
                <Grid key={game.id} item xs={6} sm={4} md={3} lg={2}>
                    <CardGame key={game.id} gameName={game.gameName} img={game.img}/>
                </Grid>
            )
        })}
    </Grid>
};