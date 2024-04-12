import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState("");

  const handleInputChange = () => {};
  const addTask = () => {};
  const deleteTask = (index) => {};
  const moveTaskUp = (index) => {};
  const moveTaskDown = (index) => {};

  return (
    <div>
      <h3>Todo List Project</h3>
    </div>
  );
};
export default TodoList;
