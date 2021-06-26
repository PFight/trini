import ReactDOM from 'react-dom';
import React from "react";
import { AppFrame } from './AppFrame';
import { $AppServices } from './services';
import { FirebaseBacked } from './services/backend';
import { BoardDataService } from './services/board-data/BoardDataService';

let backend = new FirebaseBacked();
let boardData = new BoardDataService({ backend });
boardData.loadData();

let appServices: $AppServices = {
    backend,
    boardData
};


let root = document.getElementById("root");
ReactDOM.render(<AppFrame services={appServices} />, root);