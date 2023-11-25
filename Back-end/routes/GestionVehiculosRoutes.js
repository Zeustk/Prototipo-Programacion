const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddVehiculo', async (req, res) => {


      try {

         const { Placa, Id_Tipovehiculo,Modelo,Id_Marca,Id_Tarifas,Disponible,Year} = req.body;

         const Answer = await servicio.addVehiculo(Placa, Id_Tipovehiculo,Modelo,Id_Marca,Id_Tarifas,Disponible,Year)

         console.log(Answer);

         res.status(200).json(Answer)

      } catch (error) {
         
         res.status(404).json(error);
      }

   })

   router.get('/api/getVehiculo', async (req, res) => {

      const Vehiculo = await servicio.getVehiculo();

      res.json(Vehiculo);
   })


   router.put('/api/UpdateVehiculo', async (req, res) => {

      const { Placa, Modelo } = req.body

      const Answer = await servicio.UpdateVehiculo(Placa, Modelo);


      res.json(Answer);
   })


   router.delete('/api/DeleteVehiculo', async (req, res) => {

      const { Placa } = req.body

      const Answer = await servicio.DeleteVehiculo(Placa);

      res.json(Answer);
   })

   return router;
}