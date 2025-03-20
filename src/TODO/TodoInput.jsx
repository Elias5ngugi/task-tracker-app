import { useRef, useEffect, useState } from "react";
import useTasksStore from "../store/tasksStore";

const TodoInput = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCategory, setTaskCategory] = useState("Work"); 

  const addTask = useTasksStore((state) => state.addTask);
  
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskTitle) return alert("Please add a task title");
    if (!taskDescription) return alert("Please add a task description");

    addTask({
      id: Math.ceil(Math.random() * 10000000),
      taskTitle,
      taskDescription,
      taskCategory,
      completed: false,
    });

    
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <form className="todo-input-form">
      <input
        type="text"
        placeholder="Enter task title"
        className="todo-text-input"
        ref={inputRef}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter todo description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>

      {/* Category Dropdown */}
      <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>

      <button className="submit-btn" onClick={handleAddTask}>
        Add todo
      </button>
    </form>
  );
};

export default TodoInput;
