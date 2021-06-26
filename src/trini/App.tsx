import ReactDOM from 'react-dom';
import React from "react";
import { AppFrame } from './AppFrame';
import { $AppServices } from './services';
import { FirebaseBacked } from './services/backend';
import { BoardDataService } from './services/board-data/BoardDataService';
import { Auth0Provider } from "@auth0/auth0-react";

let backend = new FirebaseBacked();
let boardData = new BoardDataService({ backend });
boardData.loadData();

let appServices: $AppServices = {
    backend,
    boardData
};


ReactDOM.render((
        <Auth0Provider
            domain="syncretic.eu.auth0.com"
            clientId="T7k8XmfXePV5zkd8mPOmgB3nv5nyr66I"
            redirectUri={window.location.origin}>
                <AppFrame services={appServices} />
        </Auth0Provider>
    ), 
    document.getElementById("root")
);