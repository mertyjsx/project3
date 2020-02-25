import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {store,persiststore} from "../src/redux/store" 
ReactDOM.render(

<Provider store={store}>
<BrowserRouter>
<PersistGate persistor={persiststore}>
<App />
</PersistGate>
</BrowserRouter>
</Provider>
    
    
    , document.getElementById('root'));

