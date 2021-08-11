import React from 'react';
import './App.css';
import Routers from './settings/Routers/Routers'
import {createStore} from 'redux'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import allReducers from "./redux/redusers";

const store=createStore(allReducers)
function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routers/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
