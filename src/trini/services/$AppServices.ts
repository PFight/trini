import { $BoardData } from "trini/services/board-data/$BoardData";
import { $Backend } from "trini/services/backend";
import { $Authentication } from "trini/app/authentication/services/$Authentication";

export type $AppServices =
    $Backend &
    $BoardData &
    $Authentication;