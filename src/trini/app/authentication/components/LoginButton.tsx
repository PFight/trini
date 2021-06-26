import React from "react";
import { $Authentication } from "../services/$Authentication";

export const LoginButton = (props: { services: $Authentication }) => {
  
  return <button onClick={() => props.services.authentication.login()}>Log In</button>;
};