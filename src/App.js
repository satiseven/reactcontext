import React from "react";
import * as Sentry from "@sentry/react";
import { UserContext } from "./context/UserContext";
import { ShowUsers } from "./pages/ShowUsers";
import Posts from "./pages/Posts";
function App(props) {
  const store = React.useContext(UserContext);
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <div className="App">
      <button
        onClick={() => {
          props.methodDoesNotExist();
        }}
      >
        Break the world
      </button>
      ;
      <button onClick={() => store.addUser({ name: "name", family: "family" })}>
        {" "}
        Add User{" "}
      </button>
      <ShowUsers />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
