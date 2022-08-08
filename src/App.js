import React, { useEffect, useState } from "react";
import SimpleComponent from "./components/SimpleComponent";
import HelloStyle from "./HOC/HelloStyle";
const EnhancedHello = HelloStyle(SimpleComponent);

const App = () => {
  return (
    <div>
      <EnhancedHello color={"red"} name="World" />
      <EnhancedHello color={"green"} name="Maddy" />
    </div>
  );
};

export default App;
