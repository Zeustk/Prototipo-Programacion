const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddCargo', async (req, res) => {


      try {

         const { Nombre,Administracion,Disponible } = req.body;

         const Answer = await servicio.addMarca(Nombre,Administracion,Disponible)

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

      const { id, Nombre } = req.body

      const Answer = await servicio.UpdateMarca(id, Nombre);


      res.json(Answer);
   })


   router.delete('/api/DeleteCARGO', async (req, res) => {

      const { id } = req.body

      const Answer = await servicio.DeleteMarca(id);

      res.json(Answer);
   })

   return router;
}

