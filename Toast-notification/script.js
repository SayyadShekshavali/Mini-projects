const successBtn = document.getElementById("successbtn");
const failureBtn = document.getElementById("failurebtn");
const wrongBtn = document.getElementById("wrongbtn");

const ToastContainer = document.querySelector("#toast-container");

//!Function for the creating different toasts
function createtoast(type, icons, title, description) {
  const newElement = document.createElement("div");
  newElement.classList.add("toast", type);

  newElement.innerHTML = `
      <img id="titleicon" src="${icons}" alt="">
      <div class="content">
        <h1 id="title">${title}</h1>
        <p id="description">${description}</p>
      </div>
        <img  class="remove" src="c:\\Users\\DELL\\Downloads\\cross-button (1).png" alt=""/>
    </div>`;

  ToastContainer.appendChild(newElement);

  const removebtn = newElement.querySelector(".remove");
  removebtn.addEventListener("click", () => {
    ToastContainer.removeChild(newElement);
  });
  setTimeout(() => {
    newElement.classList.remove("toast");
    ToastContainer.removeChild(newElement);
  }, 3000);
}

//! Action for the success botton
successBtn.addEventListener("click", () => {
  createtoast(
    "Success",
    "C:\\Users\\DELL\\Downloads\\check-mark.png",
    "Sucessful",
    "Sucessfully uploaded"
  );
});

//! Action for the Error botton
failureBtn.addEventListener("click", () => {
  createtoast(
    "error",
    "c:\\Users\\DELL\\Downloads\\browser.png",
    "Error",
    "Error occured"
  );
});

//! Action for the Warning botton
wrongBtn.addEventListener("click", () => {
  createtoast(
    "warning",
    " c:\\Users\\DELL\\Downloads\\alert.png",
    "Warning",
    "Warning"
  );
});
