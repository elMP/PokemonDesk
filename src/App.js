import React from "react";
import cn from "classnames";

import "./custom.css";
import s from "./App.modules.scss";

console.log(s);

const App = () => {
  return <div className={cn(s.header, "color")}>Yes, we did it!</div>;
};

export default App;
