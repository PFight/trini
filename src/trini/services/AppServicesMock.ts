import { AuthenticationServiceMock } from "trini/app/authentication/services/AuthenticationServiceMock";
import { BoardDataServiceMock } from "trini/services/board-data/BoardDataServiceMock";
import { $AppServices } from "./$AppServices";
import { BackedMock } from "./backend/BackendMock";

let backend = new BackedMock();
let boardData = new BoardDataServiceMock({ backend });
boardData.loadData();
let authentication = new AuthenticationServiceMock();

export const appServicesMock: $AppServices = {
    backend,
    boardData,
    authentication
};