import { BoardDataServiceMock } from "trini/services/board-data/BoardDataServiceMock";
import { $AppServices } from "./$AppServices";
import { BackedMock } from "./backend/BackendMock";

let backend = new BackedMock();
let boardData = new BoardDataServiceMock({ backend });

export const appServicesMock: $AppServices = {
    backend,
    boardData
};