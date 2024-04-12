import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Take a shower",
    "Write some codes",
  ]);
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

      {/* Display each task */}
      <ol>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ol>
    </div>
  );
};
export default TodoList;
