const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddAlquiler', async (req, res) => {


      try {

         const { Fecha_Emision,Fecha_Recepcion,KmEmision,KmRecepcion,KmRecorridos,Placa_Vehiculos,Cc_Clientes,Id_Empleados, Disponible } = req.body;

         const Answer = await servicio.addAlquiler(Fecha_Emision,Fecha_Recepcion,KmEmision,KmRecepcion,KmRecorridos,Placa_Vehiculos,Cc_Clientes,Id_Empleados, Disponible)

         console.log(Answer);

         res.status(200).json(Answer)

      } catch (error) {

         res.status(404).json(error);

      }

   })

   router.get('/api/getAlquiler', async (req, res) => {

      const Marcas = await servicio.getMarca();

      res.json(Marcas);
   })


   router.put('/api/UpdateAlquiler', async (req, res) => {

      const { Id, Fecha_Recepcion,Disponible,KmRecepcion } = req.body

      const Answer = await servicio.UpdateAlquiler(Id, Fecha_Recepcion,Disponible,KmRecepcion);


      res.json(Answer);
   })


   router.delete('/api/DeleteAlquiler', async (req, res) => {

      const { Id } = req.body

      const Answer = await servicio.DeleteMarca(Id);

      res.json(Answer);
   })

   return router;
}

