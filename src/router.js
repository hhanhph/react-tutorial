import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Welcome from "./components/Welcome";

const routes = {
    "/": () => <Welcome />,
  "/about": () => <About/>,
  "/home": () => <Home/>
};

export default routes;
