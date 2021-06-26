import { $Backend } from "trini/services";
import { BoardDataService } from "./BoardDataService";

export class BoardDataServiceMock extends BoardDataService {
    constructor(services: $Backend) {
        super(services);
        this.services = services;
    }
}