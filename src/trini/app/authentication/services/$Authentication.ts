import { Store } from "effector";
import { serviceName } from "trini/core/service-utils";
import { Project } from "trini/models/Project";
import { Ticket } from "trini/models/Tiket";
import { User } from "trini/models/User";

/** 
 * Интерфейс сервиса {@see $Authentication}.
 */
export interface IAuthentication {
    redirectUri: string;
    readonly $user: Store<User | null>;

    login(): void;
    logout(): void;
}

/** Динамически загружает тикеты из базы. */
export type $Authentication = { authentication: IAuthentication };
export const $Authentication = serviceName((x: $Authentication) => x.authentication);