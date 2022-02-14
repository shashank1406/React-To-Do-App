import { useState } from "react"

const AddToDo = ({ setTask, task }) => {

    const [value, setValue] = useState("")

    // to know the changes in iput field 

    const handelOnChange = (event) => {
        console.log(event.target.value)
        setValue(event.target.value)
    }


    // function to add task in to do list

    const addTask = () => {
        if (value.trim().length > 0) {
            let newTask = { id: new Date(), task: value, isDeleted: false, isCompleted: false, undo: [], redu: [], }
            setTask([...task, newTask])
            setValue("")
        } else {
            setValue("")
            alert("plesase put some task to add")
        }
    }

    return (
        <div>
            <input type="text" value={value} placeholder="Add a new task" id="taskinput" className="center" onChange={handelOnChange} />

            <br /><br />
            <input type="button" value="submit" onClick={addTask} style={{ color: "azure", background: "blue" }} />
        </div>
    )
}

export default AddToDo
