import React from "react";
import TodoItem from "./TodoItem";
import useTasksStore from "../store/tasksStore";

function TodoItems() {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <section className="todo-items-container">
      {tasks.map((currentTask) => (
        <TodoItem
          id={currentTask.id}
          key={currentTask.id}
          title={currentTask.taskTitle}
          description={currentTask.taskDescription}
          category={currentTask.taskCategory} 
          complete={currentTask.completed}
        />
      ))}
    </section>
  );
}

export default TodoItems;
