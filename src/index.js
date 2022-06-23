import React from "react";
import ReactDOM from "react-dom";
import Book from "./App.jsx"
import Mydata from  "./data"
import MyUseState from "./useState"

const Greeting = ()=>{
    return (
        <MyUseState/>
        Mydata.map((data)=>{
            return   <Book {...data}></Book>
        }
        )
    )
}

ReactDOM.render(<Greeting/>, document.getElementById("root"))
