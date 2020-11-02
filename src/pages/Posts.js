import React from "react";
import Loader from "../HOC/Loader";
const Posts = (props) => {
  return (
    <ul>
      {props.posts &&
        props.posts.map((item, keys) => {
          return <li key={keys}>{item.title}</li>;
        })}
    </ul>
  );
};
export default Loader(Posts, "posts");
