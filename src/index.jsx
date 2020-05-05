import React from "react";
import ReactDOM from "react-dom";
import "./styles/_index.scss";
import "tachyons";
import CardList from "./components/CardList";
import { robots } from "./content/robots";

ReactDOM.render(<CardList robots={robots} />, document.getElementById("root"));
