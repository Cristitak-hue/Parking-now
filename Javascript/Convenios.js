    const tarjetas = document.querySelectorAll(".tarjeta-convenio");
    const buscarConvenio = document.getElementById("buscarConvenio");
    const tipoConvenio = document.getElementById("tipoConvenio");
    const categoriaConvenio = document.getElementById("categoriaConvenio");
    const sinResultados = document.getElementById("sinResultados");
    const modalConvenio = document.getElementById("modalConvenio");

    function filtrarConvenios() {
        const texto = buscarConvenio.value.toLowerCase().trim();
        const tipo = tipoConvenio.value;
        const categoria = categoriaConvenio.value;
        let encontrados = 0;

        tarjetas.forEach(function(tarjeta) {
            const coincideTexto = tarjeta.textContent.toLowerCase().includes(texto);
            const coincideTipo = tipo === "todos" || tarjeta.dataset.tipo === tipo;
            const coincideCategoria = categoria === "todas" || tarjeta.dataset.categoria === categoria;
            const mostrar = coincideTexto && coincideTipo && coincideCategoria;

            tarjeta.hidden = !mostrar;

            if (mostrar) {
                encontrados++;
            }
        });

        sinResultados.style.display = encontrados === 0 ? "block" : "none";
    }

    buscarConvenio.addEventListener("input", filtrarConvenios);
    tipoConvenio.addEventListener("change", filtrarConvenios);
    categoriaConvenio.addEventListener("change", filtrarConvenios);

    document.querySelectorAll(".ver-detalle").forEach(function(boton) {
        boton.addEventListener("click", function() {
            const tarjeta = boton.closest(".tarjeta-convenio");
            const nombre = tarjeta.querySelector("h3").textContent;
            const descripcion = tarjeta.querySelector(".descripcion-convenio").textContent;
            const beneficio = tarjeta.querySelector(".beneficio-convenio strong").textContent;

            document.getElementById("tituloModal").textContent = nombre;
            document.getElementById("textoModal").textContent =
                descripcion + " Beneficio de referencia: " + beneficio + ". Consulta las condiciones antes de utilizarlo.";

            modalConvenio.classList.add("modal-visible");
        });
    });

    function cerrarModal() {
        modalConvenio.classList.remove("modal-visible");
    }

    document.getElementById("cerrarModal").addEventListener("click", cerrarModal);
    document.getElementById("aceptarModal").addEventListener("click", cerrarModal);

    modalConvenio.addEventListener("click", function(evento) {
        if (evento.target === modalConvenio) {
            cerrarModal();
        }
    });

    document.getElementById("contactarConvenios").addEventListener("click", function() {
        document.getElementById("tituloModal").textContent = "Solicitar un convenio";
        document.getElementById("textoModal").textContent =
            "Contacta al equipo de Parking-now para consultar los requisitos y proponer un convenio empresarial o institucional.";

        modalConvenio.classList.add("modal-visible");
    });