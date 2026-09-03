const formulario = document.getElementById("formProducto");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const codigo = document.getElementById("codigo").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const categoria = document.getElementById("categoria").value;

    document.getElementById("errorCodigo").textContent = "";
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCategoria").textContent = "";
    document.getElementById("mensaje").textContent = "";

    let valido = true;

    if (codigo === "") {
        document.getElementById("errorCodigo").textContent = "Debe ingresar el codigo del chocolate.";
        valido = false;
    }

    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "Debe ingresar el nombre del chocolate.";
        valido = false;
    }

    if (categoria === "") {
        document.getElementById("errorCategoria").textContent = "Debe seleccionar un tipo de chocolate.";
        valido = false;
    }

    if (valido) {
        document.getElementById("mensaje").textContent = "¡Chocolate agregado correctamente!";

        console.log("Codigo:", codigo);
        console.log("Nombre:", nombre);
        console.log("Categoria:", categoria);

        formulario.reset();
    }
});