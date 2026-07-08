const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem("notes") ;
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.contentEditable = "true";

    img.src = "delete.png";

    inputBox.appendChild(img);
    noteContainer.appendChild(inputBox);

    updateStorage();
});

noteContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

noteContainer.addEventListener("keyup", updateStorage);

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});