import React from "react";
import { UserContext } from "./context/UserContext";
function App() {
  const store = React.useContext(UserContext);
  console.log(store);
  return (
    <div className="App">
      <button onClick={() => store.addUser()}> Add User </button>
    </div>
  );
}

export default App;
