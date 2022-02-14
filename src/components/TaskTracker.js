import { useState } from "react"
import AddToDo from "./AddToDo"
import DeletedTask from "./DeletedTask"
import ToDoTaskList from "./ToDoTaskList"



const TaskTracker = () => {
    let taskDetails = [
        {
            id: 1,
            task: "sleep",
            isDeleted: false,
            isCompleted: false,
            undo: [],
            redu: [],
        },
        {
            id: 2,
            task: "eat",
            isDeleted: false,
            isCompleted: false,
            undo: [],
            redu: [],
        },
        {
            id: 3,
            task: "reapeat",
            isDeleted: false,
            isCompleted: false,
            undo: [],
            redu: [],
        },
        {
            id: 4,
            task: "reapeat",
            isDeleted: false,
            isCompleted: false,
            undo: [],
            redu: [],
        },
        {
            id: 5,
            task: "reapeat",
            isDeleted: false,
            isCompleted: false,
            undo: [],
            redu: [],
        }

    ]

    const [task, setTask] = useState(taskDetails)

    return (
        <div className="TaskTrackerCss">

            <ToDoTaskList task={task} setTask={setTask} />

            <AddToDo setTask={setTask} task={task} />

            <DeletedTask setTask={setTask} task={task} />

        </div>

    )
}

export default TaskTracker
