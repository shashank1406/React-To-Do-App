

const deletedTask = ({ task, setTask }) => {


    // function to changge the deleted state to true to false

    const undoDeleteTask = (id) => {
        task.find((element) => {
            if (element.id === id) {
                element.isDeleted = false
            }
        })
        setTask([...task])

    }
    return (
        <div className="TaskTrackerCss">

            <h1> deleted tasks </h1>

            {
                task.map(element => element.isDeleted === true &&
                    <div id="taskshow" style={{ textDecoration: element.isCompleted === true ? "line-through" : "none" }}>

                        <span>{element.task}</span>
                        <button id="btn" onClick={() => undoDeleteTask(element.id)} >Undo</button>


                    </div>)
            }

        </div>
    )
}

export default deletedTask
