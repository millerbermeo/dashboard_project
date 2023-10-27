let btn1 = document.querySelector(".menu-amb ")
let sidebar = document.querySelector(".sidebar-menu ")
let home = document.querySelector(".dashboard-main")

let btnInfo = document.querySelector(".btn-options")
let contentInfo = document.querySelector(".content-options")

btnInfo.addEventListener("click", ()=> {
    contentInfo.classList.toggle("active")
})


btn1.addEventListener("click", ()=> {
    sidebar.classList.toggle("active")
    home.classList.toggle("active")
})


const mostrarFormularioBtn = document.getElementById("mostrarFormulario");
const formulario = document.getElementById("formulario");
const userForm = document.getElementById("userForm");

let isFormRendered = false;
let isFormOpen = false; 

mostrarFormularioBtn.addEventListener("click", function() {
    if (!isFormRendered) {
        renderizarUsuarios();
        isFormRendered = true;
    }
    if (!isFormOpen) {
        formulario.style.display = "block";
    }
});

function renderizarUsuarios() {
    // Crear un div para contener los checkboxes
    const checkboxesContainer = document.createElement("div");
    
    for (let i = 1; i <= 10; i++) {
        const div = document.createElement("div");
        div.classList.add("form-container-item"); // Agregar la clase CSS

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

    // Agregar el contenedor de los checkboxes al formulario
    userForm.appendChild(checkboxesContainer);

    // Crear el botón "Seleccionar Todos" fuera del contenedor de los checkboxes
    const selectAllBtn = document.createElement("button");
    selectAllBtn.textContent = "Seleccionar Todos";
    selectAllBtn.setAttribute("class", "btn-all");

    selectAllBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const checkboxes = checkboxesContainer.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        checkAllCheckboxes();
    });

    // Agregar el botón fuera del contenedor de los checkboxes
    userForm.appendChild(selectAllBtn);
}

function checkAllCheckboxes() {
    const checkboxes = userForm.querySelectorAll('input[type="checkbox"]');
    let allChecked = true;

    checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            allChecked = false;
            return;
        }
    });

    // Aquí puedes agregar la lógica para cuando se seleccionen todos los checkboxes
}


