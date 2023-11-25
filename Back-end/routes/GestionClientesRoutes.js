const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

    router.post('/api/AddCliente', async (req, res) => {


        try{
            const { Nombre_Completo, Cc, Fecha_Nacimiento, N_Licencia, Correo, Telefono,Contrasena } = req.body;

            const Disponible = "SI";
    
            const Answer = await servicio.addCliente(Nombre_Completo, Cc, Fecha_Nacimiento, N_Licencia, Disponible, Correo, Telefono,Contrasena)
    
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

    router.put('/api/UpdateCliente', async (req, res) => {

        const { CC,Nombre_Completo,Fecha_Nacimiento, N_Licencia,Correo, Telefono,Contraseña } = req.body
  
        const Answer = await servicio.UpdateEmpleado(CC,Nombre_Completo,Fecha_Nacimiento, N_Licencia,Correo, Telefono,Contraseña);
  
  
        res.json(Answer);
     })
  
  
     router.delete('/api/DeleteCliente', async (req, res) => {
  
        const { CC } = req.body
  
        const Answer = await servicio.DeleteCliente(CC);
  
        res.json(Answer);
     })


    return router;
}

