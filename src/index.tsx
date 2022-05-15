import React from "react";
import ReactDom from "react-dom";
import "./styles.scss";
import { createRoot, Root } from "react-dom/client";

interface AppProps {
  hello: String;
}

const App: React.FC<AppProps> = (props) => {
  return <h1>{props.hello}</h1>;
};

const root:Root = createRoot(document.querySelector("#root"));
root.render(<App hello="hello world"/>)
