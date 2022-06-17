import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './web/App';
import {BrowserRouter} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import {Provider} from "react-redux";
import {store} from "./core/store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <CssBaseline/>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

