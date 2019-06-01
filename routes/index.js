var express = require('express');
var router = express.Router();
let sesion = require('express-session');
let modelo = require('../public/javascripts/modelo');
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
const tratarDatos = () => {
    let datos = JSON.parse(modelo);
    let salida = datos.reduce(acumular, "" /* Es el valor inicial de ac.*/ ) +
        `<p class="botones-general">
            <button class="nueva">Nueva Persona</button>
            <button class="resetear">Resetear las Personas</button>
        </p>`;

    return salida;
};

/* GET home page. */
router.get('/', function(req, res, next) {
    let visitas = '';

    sesion.visitas = (++sesion.visitas || 1);
    visitas = (sesion.visitas == 1 ? '1 Visita.' : sesion.visitas + ' Visitas.');
    res.render('index', { visitas: visitas });
});

module.exports = router;