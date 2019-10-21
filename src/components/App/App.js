import React from "react";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

const App = () => {
  const clickStart = () => {};
  return <WelcomeScreen time={7} errors={4} clickHandler={clickStart}/>;
};

export default App;
