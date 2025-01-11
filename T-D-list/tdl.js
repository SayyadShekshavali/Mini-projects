document.addEventListener("DOMContentLoaded", () => {
  const storage = JSON.parse(localStorage.getItem("Tasks"));
  if (storage) {
    storage.forEach((Task) => Tasks.push(Task));
  }
  console.log(Tasks);
  updatetasks();
});

const Tasks = [];

const Storage = () => {
  localStorage.setItem("Tasks", JSON.stringify(Tasks));
};
//! Creating the
const Addtask = () => {
  const innertext = document.getElementById("input-text");
  const text = innertext.value.trim();
  if (text) {
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);

    Tasks.push({ text: capitalizedText, completed: false });

    innertext.value = "";
    updatetasks();
    Progressbar();
  }
};
//! Creating and displaying the content in tasks
const updatetasks = () => {
  const listitems = document.querySelector(".list-items");
  listitems.innerHTML = "";
  Tasks.forEach((task, index) => {
    const listtasks = document.createElement("li");
    listtasks.innerHTML = `
  <div class="taskItem">  
  <div class="task ${task.completed ? "completed" : " "}">
  <input  type="checkbox"${task.completed ? "checked" : " "}/>
  <p>${task.text}</p>
<div class="icons">
<img id="edit"  src="./imgs/register.png" onClick="edittask(${index})"/>
<img id="delete" src="./imgs/delete.png"  onClick="deletetask(${index})" />
  <div/>
  <div/>
  <div/>
  `;
    // const checkbox = listtasks.querySelector("input[type='checkbox']");
    listtasks.addEventListener("change", () => toggleTaskComplete(index));
    listitems.appendChild(listtasks);
  });
};
//! Creating toggle for checking completed
const toggleTaskComplete = (index) => {
  Tasks[index].completed = !Tasks[index].completed;

  updatetasks();
  Progressbar();
};
//! Delete tasks
const deletetask = (index) => {
  Tasks.splice(index, 1);
  updatetasks();
  Progressbar();
};
//! Edit the tasks
const edittask = (index) => {
  const inputtext = document.getElementById("input-text");
  inputtext.value = Tasks[index].text;
  Tasks.splice(index, 1);
  updatetasks();
  Progressbar();
};
//! Progress
const Progressbar = () => {
  const currenttasks = Tasks.filter((task) => task.completed).length;
  const totaltask = Tasks.length;
  const Progress = (currenttasks / totaltask) * 100;
  const bar = document.getElementById("bar");
  bar.style.width = `${Progress}%`;

  document.getElementById(
    "progress-percentage"
  ).innerText = `${currenttasks}/${totaltask}`;
};
document.getElementById("i-btn").addEventListener("click", (e) => {
  e.preventDefault();
  Addtask();
});
