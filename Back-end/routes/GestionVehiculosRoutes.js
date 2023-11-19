const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddVehiculo', async (req, res) => {


      try {

         const { Nombre, Disponible } = req.body;

         const Answer = await servicio.addMarca(Nombre, Disponible)

         console.log(Answer);

         res.status(200).json(Answer)

      } catch (error) {
         
         res.status(404).json(error);
      }

   })

   router.get('/api/getVehiculo', async (req, res) => {

      const Marcas = await servicio.getMarca();

      res.json(Marcas);
   })


   router.put('/api/UpdateVehiculo', async (req, res) => {

      const { id, Nombre } = req.body

      const Answer = await servicio.UpdateMarca(id, Nombre);


      res.json(Answer);
   })


   router.delete('/api/DeleteVehiculo', async (req, res) => {

      const { id } = req.body

      const Answer = await servicio.DeleteMarca(id);

      res.json(Answer);
   })

   return router;
}