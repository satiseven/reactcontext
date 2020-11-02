import { UserReducer } from "../reducer/UserReducer";
import React from "react";
export function UserActions() {
  const initalvar = localStorage.getItem("user")
    ? {
        user: JSON.parse(localStorage.getItem("user")),
      }
    : {
        user: [],
      };
  const [state, dispatch] = React.useReducer(UserReducer, initalvar);
  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
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
