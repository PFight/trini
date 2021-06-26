import { Project } from "trini/models/Project";
import { Ticket } from "trini/models/Tiket";
import { User } from "trini/models/User";
import { IBackend } from "./$Backend";

export class BackedMock implements IBackend {
    async getTickets(): Promise<Ticket[]> {
        return [];
    }
    async  getProjects(): Promise<Project[]> {
        return [];
    }
    async  getUsers(): Promise<User[]> {
        return [];
    }

}