document.addEventListener('DOMContentLoaded', () => {
    const tareas = document.querySelectorAll('.tarea');
    const mensajeVacio = document.querySelector('.empty');

    function actualizarMensaje() {
        const tareasPendientes = document.querySelectorAll('.tarea:not(.completed)').length;
        if (tareasPendientes === 0) {
            mensajeVacio.style.display = 'block';
        } else {
            mensajeVacio.style.display = 'none';
        }
    }

    tareas.forEach(tarea => {
        const checkmark = tarea.querySelector('.checkmark');
        const btnGuia = tarea.querySelector('.btn-guia');
        const guiaCorta = tarea.querySelector('.guia-corta');

        // Marca tarea como completada
    checkmark.addEventListener('click', () => {
        tarea.classList.toggle('completed');
            actualizarMensaje();
});

        // Expandir la mini-guía
        btnGuia.addEventListener('click', () => {
            guiaCorta.classList.toggle('show');
            btnGuia.classList.toggle('rotated');
        });
    });

actualizarMensaje();
});