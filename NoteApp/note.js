document.getElementById("Createbtn").addEventListener("click", () => {
  const parentll = document.querySelector(".parentll");
  const listelement = document.createElement("div");
  listelement.className = "content";

  const uniqueId = Date.now();
  listelement.innerHTML = `
  <div class="content-box">
 <div class="textarea" contenteditable="true" ></div> 
<div class="images">
  <img class="save" src="save.png"  data-id="${uniqueId}"/>
   <img class="delete" src="delete.png" data-id="${uniqueId}"/>
 </div>
 </div>
 `;
  const contentBox = listelement.querySelector(".content-box");
  contentBox.style.animation = "ani 2s ease-in";
  parentll.appendChild(listelement);

  //! Note Saving
  listelement.querySelector(".save").addEventListener("click", () => {
    const Textarea = listelement.querySelector(".textarea");
    const clean = Textarea.innerText.trim();
    if (clean) {
      const Notes = JSON.parse(localStorage.getItem("notes")) || [];
      const save = { id: uniqueId, text: clean };
      Notes.push(save);
      localStorage.setItem("notes", JSON.stringify(Notes));
      confirm("Note Saved sucessfully! 🎉");
    }
  });
  //!Note Deleting
  listelement.querySelector(".delete").addEventListener("click", () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updated = notes.filter((note) => notes.id !== uniqueId);
    localStorage.setItem("notes", JSON.stringify(updated));
    listelement.remove();
    alert("Note deleted!❌");
  });
});
