import React from "react";
import { useRoutes, A } from "hookrouter";
import routes from "./router";

export default function App(){
  const routeResult = useRoutes(routes);
  return (
    <div >
      <A href="/about">About</A>
      <br />
      <A href="/home">Home</A>
      {routeResult}
    </div>
  );
}