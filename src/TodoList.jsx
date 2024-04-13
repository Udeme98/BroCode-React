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

  const addTask = () => {
    if (newtask.trim() !== "") {
      setTasks((t) => [...t, newtask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    // console.log(`deleted ${index}`);
  };

  const moveTaskUp = (index) => {};
  const moveTaskDown = (index) => {};

  return (
    <div className="to-do-list">
      <h1>Todo List Project</h1>
      <div className="inp-but">
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
          return (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                Move Up!
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                Move Down!
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default TodoList;
