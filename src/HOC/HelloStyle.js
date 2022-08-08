//withdLoading.js
import React from "react";

const HelloStyle =
  (BaseComponent) =>
  ({ color, ...props }) => {
    return (
      <BaseComponent {...props} style={{ fontWeight: 700, color: color }} />
    );
  };
export default HelloStyle;
