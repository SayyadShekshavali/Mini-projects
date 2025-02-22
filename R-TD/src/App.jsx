import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((tasks, i) => i !== index));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-start mt-10">
      <div className="flex">
        <input
          className="h-10 w-80 text-xl border border-black px-2"
          type="text"
          placeholder="Enter note to create"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-cyan-500 h-10 px-4 text-white border-2 border-black ml-4"
        >
          Add Note
        </button>
      </div>

      <ul className="mt-5 w-80">
        {tasks.map((currelement, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 mb-2 border border-gray-300 text-xl"
          >
            <input
              type="checkbox"
              checked={currelement.completed}
              onChange={() => toggleTask(index)}
              className="mr-2"
            />
            <span
              className={
                currelement.completed ? "line-through text-gray-500" : ""
              }
            >
              {currelement.text}
            </span>
            <button
              onClick={() => removeTask(index)}
              className="bg-red-500 text-white px-2 py-1 border border-black"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
