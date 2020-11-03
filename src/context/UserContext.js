import React from "react";
import { UserActions } from "../actions/UserActions";
export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { store } = UserActions();
  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
