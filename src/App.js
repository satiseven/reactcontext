import React from "react";
import { UserContext } from "./context/UserContext";
import { ShowUsers } from "./pages/ShowUsers";
function App() {
  const store = React.useContext(UserContext);

  return (
    <div className="App">
      <button onClick={() => store.addUser({ name: "name", family: "family" })}>
        {" "}
        Add User{" "}
      </button>
      <ShowUsers />
    </div>
  );
}

export default App;
