import { createDomain, forward, Store } from "effector";
import { Ticket, Project } from "trini/models";
import { $Backend } from "trini/services";
import { IBoardData, LoadingState } from "./$BoardData";

export class BoardDataService implements IBoardData {
    domain = createDomain("BoardDataService");
    $tickets = this.domain.store<Ticket[]>([], { name: "$tickets" });
    $projects = this.domain.store<Project[]>([], { name: "$projects" });
    $loadingState = this.domain.store<LoadingState>({ complete: false }, { name: "$loaded" });

    constructor(protected services: $Backend) {
        forward({ from: this.loadProjectsFx.doneData, to: this.$projects });
        forward({ from: this.loadTicketsFx.doneData, to: this.$tickets });
    }
    
    loadProjectsFx = this.domain.effect<void, Project[]>("loadProjectsFx", { handler: () => {
        return this.services.backend.getProjects();
    }});
    loadTicketsFx = this.domain.effect<void, Ticket[]>("loadTicketsFx", { handler: () => {
        return this.services.backend.getTickets();
    }});

    async loadData(): Promise<void> {
        await this.loadProjectsFx();
        await this.loadTicketsFx();
    }
}