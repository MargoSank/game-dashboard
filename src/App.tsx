import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Admin} from "./components/Admin-View/Admin";
import {AppContainer} from "./components/AppContainer";
import {Navigation} from "./components/Navigation";
import {Live} from "./components/Live-View/Live";
import {AppCtx, initialContext} from "./store/contex";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {

    return (
        <>
            <Navigation/>
            <AppContainer>
                <Provider store={store}>
                    <AppCtx.Provider value={initialContext}>
                    <Routes>
                        <Route path="*" element={<Navigate to="/live" replace/>}/>
                        <Route path="/live" element={<Live/>}/>
                        <Route path="/admin" element={<Admin/>}/>
                    </Routes>
                </AppCtx.Provider>
                </Provider>
            </AppContainer>
        </>
    );
}

export default App;
