import { IAuthentication } from "./$Authentication";
import createAuth0Client, { Auth0Client } from "@auth0/auth0-spa-js";
import { User } from "trini/models";
import { createDomain, forward } from "effector";

export class AuthenticationService implements IAuthentication {
    auth0?: Auth0Client;
    domain = createDomain("AuthenticationService");
    initFx = this.domain.effect<void, User | null>("initFx", { handler: this.init.bind(this) });

    redirectUri: string = window.location.origin + (window.location.href.includes("github.io") ? "/trini/" : "");
    $user = this.domain.store<User | null>(null, { name: "$user" });

    constructor() {
        forward({ from : this.initFx.doneData, to: this.$user });
        this.initFx();
    }   

    login(): void {
        this.auth0?.loginWithRedirect({ redirect_uri: this.redirectUri });
    }

    logout(): void {
        this.auth0?.logout({ returnTo: this.redirectUri });
    }

    async init() {
        try {
            this.auth0 = await createAuth0Client({
                domain: "syncretic.eu.auth0.com",
                client_id: "T7k8XmfXePV5zkd8mPOmgB3nv5nyr66I",
                redirectUri: this.redirectUri
            });
            const query = window.location.search;
            if (query.includes("code=") && query.includes("state=")) {

                // Process the login state
                await this.auth0.handleRedirectCallback();

                // Use replaceState to redirect the user away and remove the querystring parameters
                window.history.replaceState({}, document.title, window.location.pathname);
            }
            let isAuthenticated = await this.auth0.isAuthenticated();
            let user = await this.auth0?.getUser();
            return isAuthenticated ? 
                { 
                    name: user!.name || user!.nickname || user!.given_name || user!.user_id, 
                    id: user!.user_id 
                } 
                : null;
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}

