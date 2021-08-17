import "@/assets/reset.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById("app")
)