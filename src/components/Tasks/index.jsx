import React, { useState } from "react";
import TaskItem from "../TaskItem";
import { v4 as uuidV4 } from "uuid";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./index.css";

function Tasks() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      return alert("Please Add Task");
    }
    const updatedTask = {
      id: uuidV4(),
      task,
      isComplete: false,
    };
    setTask("");

    setTaskList((prevstate) => [...prevstate, updatedTask]);
  };

  const toggleIscomplete = (id) => {
    setTaskList((prevList) =>
      prevList.map((eachTask) =>
        eachTask.id === id
          ? { ...eachTask, isComplete: !eachTask.isComplete }
          : eachTask
      )
    );
  };

  const deleteTask = (id) =>
    setTaskList((prevList) =>
      prevList.filter((eachTask) => eachTask.id !== id)
    );

  const getTasks = () => (
    <ul className="tasks-conatiner">
      {taskList.map((task) => (
        <TaskItem
          details={task}
          key={task.id}
          toggleIscomplete={toggleIscomplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
  return (
    <div className="bg-conatainer">
      <div className="task-container">
        <h1 className="heading">Task Tracker</h1>
        <form className="form" onSubmit={addTask}>
          <input
            type="text"
            className="text-input"
            placeholder="Add a new task"
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="add-btn">
            <IoIosAddCircleOutline className="plus-icon" />
            Add Task
          </button>
        </form>

        {taskList.length > 0 ? (
          getTasks()
        ) : (
          <p className="no-task-p">No Tasks yet? Add Tasks</p>
        )}
      </div>
    </div>
  );
}

export default Tasks;
