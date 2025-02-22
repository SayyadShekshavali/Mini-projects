import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { Home, Shome } from "./main";

const App = () => {
  return (
    <ThemeProvider>
      <Home />
      <Shome />
    </ThemeProvider>
  );
};
export default App;
