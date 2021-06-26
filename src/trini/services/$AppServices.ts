import { $BoardData } from "trini/services/board-data/$BoardData";
import { $Backend } from "trini/services/backend";

export type $AppServices =
    $Backend &
    $BoardData;