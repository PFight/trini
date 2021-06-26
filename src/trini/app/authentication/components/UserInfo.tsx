import { useStore } from "effector-react";
import React from "react";
import { $Authentication } from "../services/$Authentication";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export interface UserInfoProps {
    services: $Authentication;
}

export const UserInfo = (props: UserInfoProps) => {
    let user = useStore(props.services.authentication.$user);
    return (
        user ? (
            <React.Fragment>
                <div>{user.name}</div>
                <LogoutButton services={props.services} />
            </React.Fragment>
        ) : (
            <LoginButton services={props.services} />
        )            
    );
}