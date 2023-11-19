const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddTipoVehiculo', async (req, res) => {


      try {

         const { Nombre, Disponible } = req.body;

         const Answer = await servicio.addTipoVehiculo(Nombre, Disponible)

         console.log(Answer);

         res.status(200).json(Answer)

      } catch (error) {

         res.status(404).json(error);

      }

   })

   router.get('/api/getTipoVehiculo', async (req, res) => {

      const TipoVehiculo = await servicio.getTipoVehiculo();

      res.json(TipoVehiculo);
   })


   router.put('/api/UpdateMarca', async (req, res) => {

      const { id, Nombre } = req.body

      const Answer = await servicio.UpdateMarca(id, Nombre);


      res.json(Answer);
   })


   router.delete('/api/DeleteMarca', async (req, res) => {

      const { id } = req.body

      const Answer = await servicio.DeleteMarca(id);

      res.json(Answer);
   })

   return router;
}

