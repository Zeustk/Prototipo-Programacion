const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

    router.post('/AddCliente', async (req, res) => {


        const { Nombre_Completo, CC, Fecha_Nacimiento, Id_TipoCliente, N_Licencia, Correo, Telefono } = req.body;

        const Disponible = "SI";

        const Answer = await servicio.addCliente(Nombre_Completo, CC, Fecha_Nacimiento, Id_TipoCliente, N_Licencia, Disponible, Correo, Telefono)

        console.log(Answer);

        res.json(Answer);

    })

    router.get('/getCliente', async (req, res) => {

        const Clientes = await servicio.getCliente();

        res.json(Clientes);
    })


    return router;
}

