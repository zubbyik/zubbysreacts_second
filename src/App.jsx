import React from "react"

const Book =({name, age, startSign})=>{
    return (
    <section>
        <h1>Title</h1>
        <h4>Hello my name is {name}</h4>
        <h4> I am {age} years old</h4>
        <h5>My star sign in {startSign}</h5>
    </section>
    )
        }
    
export default Book
