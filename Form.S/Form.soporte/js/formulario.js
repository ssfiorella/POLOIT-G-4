const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input[type="text"], #formulario input[type="email"]');
const textarea = document.getElementById('descripcion');
const selectIncidente = document.getElementById('tipo');
const terminos = document.getElementById('terminos');

// Expresiones para validar campos
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

// Estado de validación de cada campo
const campos = {
    nombre: false,
    correo: false,
    incidente: false,
    descripcion: false,
    terminos: false
};

// Función para validar campos 
function validarCampo(expresion, input, campo) {
    const grupo = document.getElementById(`grupo__${campo}`);
    if (expresion.test(input.value.trim())) {
        grupo.classList.remove('formulario__grupo-incorrecto');
        grupo.classList.add('formulario__grupo-correcto');
        campos[campo] = true;
    } else {
        grupo.classList.add('formulario__grupo-incorrecto');
        grupo.classList.remove('formulario__grupo-correcto');
        campos[campo] = false;
    }
}

// Validar descripción
function validarDescripcion() {
    const grupo = document.getElementById('grupo__descripcion');
    if (textarea.value.trim().length > 0) {
        grupo.classList.remove('formulario__grupo-incorrecto');
        grupo.classList.add('formulario__grupo-correcto');
        campos.descripcion = true;
    } else {
        grupo.classList.add('formulario__grupo-incorrecto');
        grupo.classList.remove('formulario__grupo-correcto');
        campos.descripcion = false;
    }
}

// Validar select incidente
function validarSelect() {
    const grupo = document.getElementById('grupo__tipo');
    if (selectIncidente.value !== "") {
        grupo.classList.remove('formulario__grupo-incorrecto');
        grupo.classList.add('formulario__grupo-correcto');
        campos.incidente = true;
    } else {
        grupo.classList.add('formulario__grupo-incorrecto');
        grupo.classList.remove('formulario__grupo-correcto');
        campos.incidente = false;
    }
}

// Validar checkbox términos
function validarTerminos() {
    campos.terminos = terminos.checked;
}

// Nombre y correo
inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        switch (e.target.name) {
            case 'nombre':
                validarCampo(expresiones.nombre, e.target, 'nombre');
                break;
            case 'correo':
                validarCampo(expresiones.correo, e.target, 'correo');
                break;
        }
    });
});

// Descripción
textarea.addEventListener('input', validarDescripcion);

// Select incidente
selectIncidente.addEventListener('change', validarSelect);

// Checkbox términos
terminos.addEventListener('change', validarTerminos);

// Submit del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar todos los campos antes de enviar
    validarDescripcion();
    validarSelect();
    validarTerminos();

    // Comprobamos si todos los campos son válidos
    const formularioValido = campos.nombre && campos.correo && campos.incidente && campos.descripcion && campos.terminos;

    if (formularioValido) {
        // Si todo esta ok, ocultar el mensaje de error y mostrar el de éxito
        document.getElementById('formulario__mensaje').style.display = 'none';
        document.getElementById('formulario__mensaje-exito').style.display = 'block';

        // Resetear todos los campos después de un envío exitoso
        formulario.reset();

        // Eliminar clases de validación de todos los grupos para limpiar el formulario visualmente
        document.querySelectorAll('.formulario__grupo-correcto').forEach((grupo) => {
            grupo.classList.remove('formulario__grupo-correcto');
        });

    } else {
        // Si la validación falla, ocultar el mensaje de éxito y mostrar el de error
        document.getElementById('formulario__mensaje-exito').style.display = 'none';
        document.getElementById('formulario__mensaje').style.display = 'block';
    }
});