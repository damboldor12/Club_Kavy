let projectImages;
let contentMain;
let projectContacts;
let plsSelect;
document.addEventListener("DOMContentLoaded", function () {
    projectImages = document.querySelectorAll(".projects img");
    projectContacts = document.querySelectorAll(".project_contacts div");
    contentMain = document.getElementById("content_main");
    plsSelect = document.getElementById("PlsSelect");

    HideContacts();

    projectImages.forEach(img => {
        img.addEventListener("click", function () {
            SelectProject(this);
        });
    });
    contentMain.addEventListener("click", function () {
        projectImages.forEach(img => {
            RemoveSelected()
        });
    });



    function handleScreenWidthChange() {
        var WindowHeight = window.innerHeight; // Виправлено innerHeight
        var Content = document.getElementById("content"); // Виправлено getElementbyid на getElementById
        console.log(WindowHeight); // Виправлено "WindowHeight"
        Content.style.height = WindowHeight + "px"; // Додано "px"
    }
    var interval = setInterval(handleScreenWidthChange, 5);
});

function SelectProject(selected) {
    RemoveSelected();
    HideContacts();
    setTimeout(() => {
        plsSelect.style.display = "none";
        selected.classList.add("selected");
        var selectedName = selected.getAttribute("alt");
        var selectedContacts = document.getElementById(selectedName);
        selectedContacts.style.display = "flex";
        setTimeout(function () {
            selectedContacts.style.opacity = "1"; // Плавно змінюється прозорість
        }, 1);
    }, 251);
}

function RemoveSelected() {
    HideContacts();
    projectImages.forEach(img => {
        img.classList.remove("selected");
    });

    setTimeout(() => {
        plsSelect.style.display = "block";
    }, 250);
}

function HideContacts() {
    projectContacts.forEach(contact => {
        contact.style.opacity = "0";
        setTimeout(() => {
            contact.style.display = "none";
        }, 250);
    });
}
