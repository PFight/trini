import { useStore } from "effector-react";
import React from "react";
import { $BoardData } from "trini/services/board-data/$BoardData";

export interface IBoardProps {
    services: $BoardData;
}

export const Board = (props: IBoardProps) => {
    let tickets = useStore(props.services.boardData.$tickets);

    return (
        <div className="board">
            {tickets.map(ticket => (
                <div key={ticket.id}>{ticket.name}</div>
            ))}
        </div>
    );
}