import React from "react";

const SimpleComponent = ({ name, ...otherProps }) => {
  return <div {...otherProps}>Hello {name}</div>;
};

export default SimpleComponent;
