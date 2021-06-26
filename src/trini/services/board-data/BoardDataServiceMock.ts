import { createDomain, forward, Store } from "effector";
import { Ticket, Project } from "trini/models";
import { $Backend } from "trini/services";
import { IBoardData, LoadingState } from "./$BoardData";
import { BoardDataService } from "./BoardDataService";

export class BoardDataServiceMock extends BoardDataService {
}