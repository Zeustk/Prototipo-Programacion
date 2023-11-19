const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

    router.post('/api/AddCliente', async (req, res) => {


        try{
            const { Nombre_Completo, CC, Fecha_Nacimiento, N_Licencia, Correo, Telefono } = req.body;

            const Disponible = "SI";
    
            const Answer = await servicio.addCliente(Nombre_Completo, CC, Fecha_Nacimiento, N_Licencia, Disponible, Correo, Telefono)
    
            console.log(Answer);
    
            res.status(200).json(Answer);

        }catch(error){

            res.status(404).json(error)
        }
        

    })

    router.get('/api/getCliente', async (req, res) => {

        const Clientes = await servicio.getCliente();

        res.json(Clientes);
    })


    return router;
}

