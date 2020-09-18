import React from "react";
import ReactDom from "react-dom";
import "./styles.scss";

interface AppProps {
  hello: String;
}

const App: React.FC<AppProps> = (props) => {
  return <h1>{props.hello}</h1>;
};

ReactDom.render(<App hello="hello world"/>, document.querySelector("#root"));
