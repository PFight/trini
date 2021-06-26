import ReactDOM from 'react-dom';
import React from "react";
import { AppFrame } from './AppFrame';
import { $AppServices } from './services';
import { FirebaseBacked } from './services/backend';
import { BoardDataService } from './services/board-data/BoardDataService';
import { AuthenticationService } from './app/authentication';

let backend = new FirebaseBacked();
let boardData = new BoardDataService({ backend });
boardData.loadData();
let authentication = new AuthenticationService();

let appServices: $AppServices = {
    backend,
    boardData,
    authentication
};


ReactDOM.render(<AppFrame services={appServices} />, document.getElementById("root"));