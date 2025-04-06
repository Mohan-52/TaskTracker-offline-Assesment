import React from "react";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { CiTrash } from "react-icons/ci";
import "./index.css";

function TaskItem(props) {
  const { details, toggleIscomplete, deleteTask } = props;
  const { id, task, isComplete } = details;
  const completedCls = isComplete ? "complted" : null;
  const activeBg = isComplete ? "acivie-bg" : null;
  return (
    <li className={`task-li ${activeBg}`}>
      <div className="flex">
        <button onClick={() => toggleIscomplete(id)} className="btn">
          {isComplete ? (
            <FaCircleCheck className="icon tickIcon" />
          ) : (
            <FaCircleXmark className="icon crossIcon" />
          )}
        </button>
        <p className={completedCls}>{task}</p>
      </div>
      <button onClick={() => deleteTask(id)} className="btn">
        <CiTrash className="icon" />
      </button>
    </li>
  );
}

export default TaskItem;
