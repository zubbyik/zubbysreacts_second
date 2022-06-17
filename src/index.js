import React from "react";
import ReactDOM from "react-dom";
import Book from "./App.jsx"

const Greeting = ()=>{
    return (<Book/>)
}

ReactDOM.render(<Greeting/>, document.getElementById("root"))
