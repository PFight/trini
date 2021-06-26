import { IAuthentication } from "./$Authentication";
import createAuth0Client, { Auth0Client } from "@auth0/auth0-spa-js";
import { User } from "trini/models";
import { createDomain, forward } from "effector";

export class AuthenticationServiceMock implements IAuthentication {
    domain = createDomain("AuthenticationServiceMock");
    redirectUri: string = window.location.origin;
    $user = this.domain.store<User | null>({ id: "1", name: "Ипполит Никитич" }, { name: "$user" });

    constructor() {        
    }   

    login(): void {        
    }

    logout(): void {        
    }
}

