import {PropsWithChildren} from "react";
import Container from '@mui/material/Container';

export const AppContainer = (props: PropsWithChildren) =>
    <Container maxWidth="lg">
        {props.children}
    </Container>;