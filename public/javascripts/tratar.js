//require('./jquery-3.4.1.min');
const acumular = (ac, persona, id) => { // Función de ayuda.
    ac +=
        `<div class="contenedor">
            <span   ${persona.nombre} + ' ' + ${persona.edad}</span>
            <button class="editar"   personaid="${id}">Editar</button>
            <button class="borrar" personaid="${id}">Borrar</button>
        </div>\n`;

    return ac;
};

/**
 * 
 * @return
 * 
 */
$(function() {
    $('#datosbase').html('');
    $.getJSON('/bd', function(datos) {
        for (let indice = 0; indice < datos.length; ++indice) {
            let nombreEdad = datos[indice].nombre + ', ' + datos[indice].edad + ' años.';

            $('#datosbase').append(
                '<div>' +
                `<span class="nombreEdad">  ${nombreEdad}` +
                `<button class="editar"   personaid="${indice}">Editar</button>` +
                `<button class="borrar" personaid="${indice}">Borrar</button>` +
                '</span>' +
                '</div>\n'
            );
        }
        $('#datosbase').append(
            `<p class="botones-general">
                <button class="nueva">Nueva Persona</button>
                <button class="resetear">Resetear la BD</button>
            </p>`
        );
    });
});