//variables 

let btn1 = document.querySelector(".menu-amb ")
let sidebar = document.querySelector(".sidebar-menu ")
let home = document.querySelector(".dashboard-main")
let btnForm = document.querySelector("#userForm")
let bodyElement = document.querySelector(".dashboard-main");
let overlay = document.querySelector(".overlay")


let btnInfo = document.querySelector(".btn-options")
let contentInfo = document.querySelector(".content-options")


//funcion para abrir y cerrar modal de opciones

btnInfo.addEventListener("click", () => {
    if (contentInfo.classList.contains("active")) {
        contentInfo.classList.remove("active")
    } else {
        contentInfo.classList.add("active")
    }
})
bodyElement.addEventListener("click", () => {
    if (contentInfo.classList.contains("active")) {
        contentInfo.classList.remove("active")
    }
})

//funcion para abrir y cerrar el sidebar

btn1.addEventListener("click", () => {

    sidebar.classList.toggle("active")
    home.classList.toggle("active")
    overlay.classList.toggle("active")
})



//funcion para insertar formulario abrir y mostrar usuarios usando un for

const mostrarFormularioBtn = document.getElementById("mostrarFormulario");
const formulario = document.getElementById("formulario");
const userForm = document.getElementById("userForm");

let renderForm = false;
let openForm = false;

//mostrar el formulario

mostrarFormularioBtn.addEventListener("click", function () {
    if (!renderForm) {
        renderizarUsuarios();
        renderForm = true;
    }
    if (!openForm) {
        formulario.style.display = "block";
    }
});

//mostrar los usuarios usando un for, con createElemnt creo elementos y contendeores para alojar la informacion

function renderizarUsuarios() {

    const checkboxesContainer = document.createElement("div");

    for (let i = 1; i <= 10; i++) {
        const div = document.createElement("div");
        div.classList.add("form-containe");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = `usuario${i}`;
        checkbox.id = `usuario${i}`;

        const label = document.createElement("label");
        label.htmlFor = `usuario${i}`;
        label.appendChild(document.createTextNode(`Usuario ${i}`));

        div.appendChild(checkbox);
        div.appendChild(label);

        checkboxesContainer.appendChild(div);
        checkboxesContainer.appendChild(document.createElement("br"));
    }

    userForm.appendChild(checkboxesContainer);


    //crear botom para ejecutar funcion de seleccionar todos los checkbox

    const selectAllBtn = document.createElement("button");

    selectAllBtn.textContent = "Seleccionar Todos";
    selectAllBtn.setAttribute("class", "btn-all");
    let allSelected = false;

    selectAllBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const checkboxes = checkboxesContainer.querySelectorAll('input[type="checkbox"]');
        if (allSelected) {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            allSelected = false;
        } else {
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
            allSelected = true;
        }
    });

    userForm.appendChild(selectAllBtn);
}



//tomar los datos del form y mostralos en un alert

userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const checkboxes = userForm.querySelectorAll('input[type="checkbox"]');
    const datosSeleccionados = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            datosSeleccionados.push(checkbox.getAttribute('name'));
        }
    });

    if (datosSeleccionados.length > 0) {
        alert("Checkbox seleccionados:\n" + datosSeleccionados.join("\n"));
    } else {
        alert("Ningún checkbox seleccionado.");
    }
});




