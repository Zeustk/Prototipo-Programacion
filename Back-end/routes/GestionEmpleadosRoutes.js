const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddEmpleado', async (req, res) => {


      try {
         console.log('hola');

         const { Correo, Clave,Id_Cargo,Disponible } = req.body;


         console.log(Id_Cargo);
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

      const {Correo, Clave,Id} = req.body

      const Answer = await servicio.UpdateEmpleado(Correo, Clave,Id);


      res.json(Answer);
   })


   router.delete('/api/DeleteEmpleado/:Id', async (req, res) => {

      const { Id } = req.params
      console.log(Id)
      const Answer = await servicio.DeleteEmpleado(Id);

      res.json(Answer);
   })

   router.post('/api/BuscarEmpleado', async (req, res) => {

      const { Correo,Clave } = req.body

      console.log(Correo);
      console.log(Clave);

      const Answer = await servicio.BuscarEmpleado(Correo,Clave);

      res.json(Answer);
   })

   return router;
}


