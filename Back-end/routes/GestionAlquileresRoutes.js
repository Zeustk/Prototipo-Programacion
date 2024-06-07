const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddAlquiler', async (req, res) => {


      try {

         const { Fecha_Emision, Fecha_Contrato, KmEmision, KmRecepcion, KmRecorridos, Placa_Vehiculo, Cc_Clientes, Id_Empleados, Valor_Inicial, Disponible, Cargos_Adicionales, Total, Fecha_Recepcion,Pago_Inicial} = req.body;

         const FechaContrato = new Date(Fecha_Contrato);
         const FechaEmision = new Date(Fecha_Emision);
<<<<<<< HEAD

         if (KmEmision == 0 || Id_Empleados == 0 || Cc_Clientes == '' || Placa_Vehiculo == '' || KmEmision=='') {
=======
         
         if (KmEmision == 0 || Id_Empleados == 0 || Cc_Clientes == '' || FechaContrato < FechaEmision || Placa_Vehiculo == '' ) {
>>>>>>> 82f8fc1a4d51a7dbd398b08d95a8befc30fc6f4b
            return res.status(400).json('VERIFIQUE CAMPOS');
         }

         if (FechaContrato < FechaEmision ){
            return res.status(400).json('La Fecha De Recepcion debe ser mayor a la Fecha de Emision');
         }

         if (await servicio.VehiculoEstaEnCurso(Placa_Vehiculo)) {
            console.log('placa');
            console.log(await servicio.VehiculoEstaEnCurso(Placa_Vehiculo));
            return res.status(400).json('Este Vehiculo Ya está en Curso');
         }

         console.log('nani');
         console.log(await servicio.VehiculoEstaEnCurso(Placa_Vehiculo));


         const Answer = await servicio.addAlquiler(Fecha_Emision, Fecha_Contrato, KmEmision, KmRecepcion, KmRecorridos, Placa_Vehiculo, Cc_Clientes, Id_Empleados, Valor_Inicial, Disponible, Cargos_Adicionales, Total, Fecha_Recepcion,Pago_Inicial)


         res.status(200).json(Answer)

      } catch (error) {

         res.status(404).json(error);

      }

   })

   router.get('/api/getAlquiler', async (req, res) => {

      const Alquileres = await servicio.getAlquiler();

      res.json(Alquileres);
   })


   router.put('/api/UpdateAlquiler', async (req, res) => {

      const { Id, Fecha_Recepcion, KmRecepcion, Pago_Inicial,Valor_Inicial} = req.body
      
      if(Pago_Inicial>=1000 || Pago_Inicial<=Valor_Inicial){
         return res.status(404).json('El Pago inicial debe ser mayor a 1000');

      }
      const Answer = await servicio.UpdateAlquiler(Id, Fecha_Recepcion, KmRecepcion,Pago_Inicial,Valor_Inicial);


      res.json(Answer);
   })


   router.delete('/api/DeleteAlquiler/:ID', async (req, res) => {

      const { ID } = req.params

      const Answer = await servicio.DeleteAlquiler(ID);

      res.json(Answer);
   })

   router.get('/api/getReporte', async (req, res) => {

      const Reportes = await servicio.getReporte();

      res.json(Reportes);
   })

   return router;
}

