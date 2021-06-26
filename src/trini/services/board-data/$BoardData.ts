import { Store } from "effector";
import { Project } from "trini/models/Project";
import { Ticket } from "trini/models/Tiket";
import { serviceName } from "trini/core/service-utils";

export interface LoadingState {
    complete: boolean;
    success?: boolean;
    errorMessage?: string;
}

/** 
 * Интерфейс сервиса {@see $BoardData}.
 */
export interface IBoardData {
    $tickets: Store<Ticket[]>;
    $projects: Store<Project[]>;
    $loadingState: Store<LoadingState>;

    loadData(): Promise<void>;
}

/** Хранит информацию о тикетах и проектах. */
export type $BoardData = { boardData: IBoardData };
export const $BoardData = serviceName((x: $BoardData) => x.boardData);