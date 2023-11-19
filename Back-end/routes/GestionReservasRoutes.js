const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddReserva', async (req, res) => {


      try {

         const { Fecha_Inicio, Fecha_Final,Cc_Cliente,Placa_Vehiculo } = req.body;

         const Answer = await servicio.addReserva(Fecha_Inicio, Fecha_Final,Cc_Cliente,Placa_Vehiculo)

         console.log(Answer);

         res.status(200).json(Answer)

      } catch (error) {

         res.status(404).json(error);

      }

   })

   router.get('/api/getMarca', async (req, res) => {

      const Marcas = await servicio.getMarca();

      res.json(Marcas);
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

