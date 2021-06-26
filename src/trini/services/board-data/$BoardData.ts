import { Store } from "effector";
import { Project } from "trini/models/Project";
import { Ticket } from "trini/models/Tiket";
import { serviceName } from "trini/core/service-utils";
import { LoadingState } from "trini/models/LoadingState";


/** 
 * Интерфейс сервиса {@see $BoardData}.
 */
export interface IBoardDataService {
    $tickets: Store<Ticket[]>;
    $projects: Store<Project[]>;
    $loadingState: Store<LoadingState>;

    loadData(): Promise<void>;
}

/** Хранит информацию о тикетах и проектах. */
export type $BoardData = { boardData: IBoardDataService };
export const $BoardData = serviceName((x: $BoardData) => x.boardData);