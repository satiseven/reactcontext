import { UserReducer } from "../reducer/UserReducer";
import React from "react";
export function UserActions() {
  const initalvar = {
    user: [],
  };
  const [state, dispatch] = React.useReducer(UserReducer, initalvar);
  const addUser = (payload) => {
    dispatch({ type: "ADD_USER", payload });
  };
  const store = {
    ...state,
    addUser,
  };
  return {
    store,
  };
}
