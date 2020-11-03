import React from "react";
const Loader = (WrappedComponent, feild) => {
  return class extends React.Component {
    render() {
      return !this.props[feild] || this.props[feild].length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};
export default Loader;
