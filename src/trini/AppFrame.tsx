import React from "react";
import { Board } from "./app/board";
import { $AppServices } from "./services";
import "./AppFrame.css";
import LoginButton from "./app/login/LoginButton";

export interface IAppFrameProps {
    services: $AppServices;
}

export const AppFrame = (props: IAppFrameProps) => {
    return (
        <div className="app-frame">
            <Board services={props.services} />
            <LoginButton />
        </div>
    );
}