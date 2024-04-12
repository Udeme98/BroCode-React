import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {};
  const deleteTask = (index) => {};
  const moveTaskUp = (index) => {};
  const moveTaskDown = (index) => {};

  return (
    <div className="to-do-list">
      <h1>Todo List Project</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newtask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
    </div>
  );
};
export default TodoList;
