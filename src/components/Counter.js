import { getAllByPlaceholderText } from "@testing-library/react"
import { useState } from "react"

let counterNumber = 0
const Counter = () => {

const [counter,setCounter]=useState(counterNumber)

const incrementByOne=()=>{
    setCounter(counter+1)
}
const decrementByOne=()=>{
    if(counter===0){
        alert("value of counter cant be decrement ")
    }else{
        setCounter(counter-1)
    }
    
    
}

    return (
        <div className="counterCss">
            <h2 className="center" >counter app</h2>
            <p className="center">{counter}</p>
            <input type="button" value ="increment" onClick={incrementByOne} id="incrementbutton"/><br/><br/>
            <input type="button" value ="decrement" onClick={decrementByOne} id="decrementbutton" />
        </div>
    )
}

export default Counter
