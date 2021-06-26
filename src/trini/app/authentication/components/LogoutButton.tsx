import React from "react";;
import { $Authentication } from "../services/$Authentication";

export const LogoutButton = (props: { services: $Authentication }) => {

  return (
    <button onClick={() => props.services.authentication.logout()}>
      Log Out
    </button>
  );
};