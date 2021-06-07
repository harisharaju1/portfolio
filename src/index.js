import AOS from "aos";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import * as serviceWorker from "./serviceWorker";
AOS.init();

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
