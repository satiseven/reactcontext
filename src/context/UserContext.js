import React from "react";
import { UserActions } from "../actions/UserActions";
const store = UserActions();
export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
