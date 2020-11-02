import React from "react";
import { UserContext } from "../context/UserContext";
export const ShowUsers = () => {
  const store = React.useContext(UserContext);
  return (
    <ul>
      {store.user.map((item, keys) => {
        return (
          <li key={keys}>
            {" "}
            Name : {item.name} - Family : {item.family}
          </li>
        );
      })}
    </ul>
  );
};
