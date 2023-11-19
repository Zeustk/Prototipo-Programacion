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

