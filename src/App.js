import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import TestingStyledComponents from "./TestingStyledComponents";

function App() {
  return (
    <div>
      Comfy Sloth Starter
      <TestingStyledComponents />
    </div>
  );
}

export default App;
