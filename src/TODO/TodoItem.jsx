import React from "react";
import useTasksStore from "../store/tasksStore";

const categoryColors = {
  Work: "#007bff",
  Personal: "#28a745",
  Urgent: "#dc3545",
  Other: "#6c757d",
};

function TodoItem({ id, title, description, category, complete }) {
  const completeTask = useTasksStore((state) => state.completeTask);
  const incompleteTask = useTasksStore((state) => state.incompleteTask);
  const deleteTask = useTasksStore((state) => state.deleteTask);

  const handleMarkAsDone = (e) => {
    e.preventDefault();
    completeTask(id);
  };

  const handleMarkIncomplete = (e) => {
    e.preventDefault();
    incompleteTask(id);
  };

  const handleDeleteTask = (e) => {
    e.preventDefault();
    deleteTask(id);
  };

  return (
    <div className="todo-item">
      <span 
        className="task-category" 
        style={{
          backgroundColor: categoryColors[category] || categoryColors["Other"],
          color: "#fff",
          padding: "0.3rem 0.8rem",
          borderRadius: "5px",
          fontSize: "1.3rem",
        }}
      >
        {category}
      </span>
      <h3 className={complete ? `todo-title complete` : `todo-title`}>
        {title}
      </h3>
      <p className={complete ? `complete` : ``}>{description}</p>
      <div className="todo-item__controls">
        <button onClick={complete ? handleMarkIncomplete : handleMarkAsDone}>
          {complete ? `mark as incomplete` : `mark as done`}
        </button>
        <button className="delete-btn" onClick={handleDeleteTask}>
          delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
