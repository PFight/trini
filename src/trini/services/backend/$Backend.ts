import { Store } from "effector";
import { serviceName } from "trini/core/service-utils";
import { Project } from "trini/models/Project";
import { Ticket } from "trini/models/Tiket";
import { User } from "trini/models/User";

/** 
 * Интерфейс сервиса {@see $Backend}.
 */
export interface IBackend {
    getTickets(): Promise<Ticket[]>;
    getProjects(): Promise<Project[]>;
}

/** Динамически загружает тикеты из базы. */
export type $Backend = { backend: IBackend };
export const $Backend = serviceName((x: $Backend) => x.backend);