const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddCargo', async (req, res) => {


      try {

         const { Nombre,Administracion,Disponible } = req.body;

         const Answer = await servicio.addCargo(Nombre,Administracion,Disponible)

         console.log(Answer);

         res.status(200).json(Answer)

      } catch (error) {

         res.status(404).json(error);

      }

   })

   router.get('/api/getCargo', async (req, res) => {

      const Cargos = await servicio.getCargo();

      res.json(Cargos);
   })


   router.put('/api/UpdateCargo', async (req, res) => {

      const { Nombre,Administracion,Id_Cargo } = req.body

      const Answer = await servicio.UpdateCargo(Nombre,Administracion,Id_Cargo);


      res.json(Answer);
   })


   router.delete('/api/Deletecargo/:Id_Cargo', async (req, res) => {

      const { Id_Cargo } = req.params

      const Answer = await servicio.DeleteCargo(Id_Cargo);

      res.json(Answer);
   })

   return router;
}

