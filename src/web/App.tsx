import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Admin} from "./page-admin/Admin";
import {AppContainer} from "./common/AppContainer";
import {Navigation} from "./common/Navigation";
import {Live} from "./page-live/Live";
import {Provider} from "react-redux";
import {store} from "../core/store/store";

export const App = () => <>
    <Navigation/>
    <AppContainer>
        <Provider store={store}>
            <Routes>
                <Route path="*" element={<Navigate to="/live" replace/>}/>
                <Route path="/live" element={<Live/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </Provider>
    </AppContainer>
</>
