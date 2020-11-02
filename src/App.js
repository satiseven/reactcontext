import React from "react";
import { UserContext } from "./context/UserContext";
import { ShowUsers } from "./pages/ShowUsers";
import Posts from "./pages/Posts";
function App() {
  const store = React.useContext(UserContext);
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <div className="App">
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
