import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const ToDoTaskList = ({ task, setTask }) => {

    const [edit, setEdit] = useState("")
    const [editValue, setEditValue] = useState("")


    // function to get value from edit task input

    const handelOneditChange = (event) => {
        console.log(event.target.value)
        setEdit(event.target.value)
    }


    // function to change the completed status

    const completeTask = (id) => {
        task.find((element) => {
            if (element.id === id) {
                element.isCompleted = true
            }
        })
        setTask([...task])
    }

    // function to delete the perticuler task

    const deleteTask = (id) => {
        task.find((element) => {
            if (element.id === id) {
                element.isDeleted = true
            }
        })
        setTask([...task])

    }


    // function to edit the task

    const editTask = (id) => {
        task.find((element) => {
            if (element.id === id) {
                if (element.iscompleted === true) {
                    return alert("task is already completed")
                }
            }
        })
        setEditValue(id)

    }


    // function to save the edited task

    const saveEditTask = (id) => {
        if (edit.trim().length > 0) {
            task.find((element) => {
                if (element.id == id) {
                    element.undo.push(element.task)
                    element.task = edit

                }
            })
            setTask([...task])
            setEdit("")
            setEditValue("")
        } else {
            setEdit("")
            // setEditValue("")
            alert("plesase put some task to add")
        }
    }


    // function to cancel to edit the task

    const cancelEditTask = (id) => {
        setTask([...task])
        setEdit("")
        setEditValue("")
    }


    // function to undo the edited task

    const undoEditTask = (id) => {

        task.find((element) => {
            if (element.id === id) {
                if (element.undo.length === 0) {
                    return alert("theare is not edited task to undo")
                }
                let length = element.undo.length - 1
                element.task = element.undo[length]
                element.redu.push(element.undo[length])
                if (length > 0) {
                    element.undo.pop()
                }
            }
        })
        setTask([...task])

    }


    // function to redu the edited task

    const reduEditTask = (id) => {

        task.find((element) => {
            if (element.id === id) {
                if (element.redu.length === 0) {
                    return alert("theare is no task to redu")
                }
                element.task = element.redu[0]
                element.redu.unswift()
            }
        })
        setTask([...task])

    }


    //  function to show pending task

    let pendingTaskCounter = []
    task.filter(element => element.isDeleted === false && element.isCompleted === false ? pendingTaskCounter.push(element) : console.log(""))


    return (
        <div>
            <h1>{`Pending tasks (${pendingTaskCounter.length})`}</h1>

            {
                task.map(element => element.isDeleted === false &&
                    <div id="taskshow" style={{ textDecoration: element.isCompleted === true ? "line-through" : "none" }}>



                        {element.id === editValue ?
                            <input type="text" value={edit} placeholder="task to edit" id="taskinput" className="center" onChange={handelOneditChange} /> :
                            <span>{element.task}</span>}


                        <button id="btn" onClick={() => completeTask(element.id)} >complete</button>
                        <button id="btn" onClick={() => editTask(element.id)} >EditTask</button>

                        {element.id === editValue ? <button id="btn" onClick={() => saveEditTask(element.id)} >save</button> : null}
                        {element.id === editValue ? <button id="btn" onClick={() => cancelEditTask(element.id)} >cancel</button> : null}
                        <button id="btn" onClick={() => undoEditTask(element.id)} >UndoTask</button>
                        {/* <button id="btn" onClick={() => reduEditTask(element.id)} >reduTask</button> */}

                        <FaTimes id="crosIcon" onClick={() => deleteTask(element.id)} />

                    </div>)
            }
        </div>
    )
}

export default ToDoTaskList
