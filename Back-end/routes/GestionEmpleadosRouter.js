const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddEmpleado', async (req, res) => {


      try {

         const { Correo, Clave,Id_Cargo,Disponible } = req.body;


         const Answer = await servicio.addEmpleado(Correo, Clave,Id_Cargo,Disponible)

         console.log(Answer);

         res.status(200).json(Answer)

      } catch (error) {

         res.status(404).json(error);

      }

   })

   router.get('/api/getEmpleado', async (req, res) => {

      const Empleado = await servicio.getEmpleado();

      res.json(Empleado);
   })


   router.put('/api/UpdateEmpleado', async (req, res) => {

      const { Id,Correo, Clave,Id_Cargo } = req.body

      const Answer = await servicio.UpdateEmpleado(Id,Correo, Clave,Id_Cargo);


      res.json(Answer);
   })


   router.delete('/api/DeleteEmpleado', async (req, res) => {

      const { Id } = req.body

      const Answer = await servicio.DeleteMarca(Id);

      res.json(Answer);
   })

   return router;
}

