import { useState } from "react"

let toDoListArray = ["wakeup", "breakfast", "study", "lunch"]


const ToDoList = () => {
  
  const [toDoList, setToDoList] = useState(toDoListArray)
  const [value,setValue]=useState("")


  const addTask = (event) => {
    setToDoList([...toDoList,value])
    setValue("")
  }
  

  const handelOnChange = (event) => {
    console.log(event.target.value) 
    setValue(event.target.value)
  }


  return (
    <div className="counterCss" >
      
      <h2 className="center">To do list app</h2>
      {toDoList.map(element => <p className="center">{element}</p>)}
      <input type="text" value={value}  id="toDoListCss" placeholder="addtask" className="center" name="" onChange={handelOnChange} /><br /><br />
      <input type="button" value="submit" onClick={addTask} className="center" />

    </div>


  )
}

export default ToDoList
