import { UserReducer } from "../reducer/UserReducer";
import React from "react";
export const UserActions = () => {
  const initalvalues = { user: [] };
  const [state, dispatch] = React.useReducer(UserReducer, initalvalues);
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
};
