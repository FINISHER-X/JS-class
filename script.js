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

// Hamburger / mobile nav behavior
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        mobileNav.classList.toggle('open');
        mobileNav.setAttribute('aria-hidden', !isOpen);
    });

    mobileNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
            mobileNav.classList.remove('open');
            mobileNav.setAttribute('aria-hidden', true);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
            mobileNav.classList.remove('open');
            mobileNav.setAttribute('aria-hidden', true);
        }
    });
}