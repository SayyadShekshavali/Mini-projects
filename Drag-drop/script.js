const colorbtn = document.getElementById("clrbtn");
const inputclr = document.querySelector(".color");

colorbtn.addEventListener("click", () => {
  const notes = document.querySelector(".notes");
  const notep = document.createElement("div");
  notep.className = "note";
  notep.style.position = "absolute";
  notep.style.left = "50px";
  notep.style.top = "50px";

  notep.innerHTML = `
    <div class="title">x</div>
    <textarea class="noteinput" type="text" />
  `;

  const title = notep.querySelector(".title");
  title.style.backgroundColor = inputclr.value;
  notes.appendChild(notep);

  enableDragging(notep);
});

let cursor = { x: 0, y: 0 };
let note = { dom: null, x: 0, y: 0 };
let isDragging = false;

function enableDragging(notep) {
  const title = notep.querySelector(".title");

  notep.addEventListener("mousedown", (event) => {
    //! Tracking mouse movement inside the viewport.
    cursor = { x: event.clientX, y: event.clientY };
    note = {
      dom: notep,
      //!These properties are used to get the position of an element relative to its offset parent./
      x: notep.offsetLeft,
      y: notep.offsetTop,
    };

    isDragging = false;

    document.addEventListener("mousemove", dragNote);
    document.addEventListener("mouseup", stopDragging);
  });

  function dragNote(event) {
    if (!note.dom) return;
    //!These properties help you track where the cursor is on the screen in a web page
    let dx = event.clientX - cursor.x;
    let dy = event.clientY - cursor.y;

    note.dom.style.left = `${note.x + dx}px`;
    note.dom.style.top = `${note.y + dy}px`;

    isDragging = true;
  }

  function stopDragging() {
    document.removeEventListener("mousemove", dragNote);
    document.removeEventListener("mouseup", stopDragging);
  }

  title.addEventListener("click", (event) => {
    if (!isDragging) {
      notep.remove();
    }
  });
}
