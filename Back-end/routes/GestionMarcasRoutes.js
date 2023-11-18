const express = require("express");

const router = express.Router();


module.exports = function(servicio){

    router.post('/AddMarca', async (req, res) => {


     const { Nombre, Disponible } = req.body;
    
     const Answer= await servicio.addMarca(Nombre,Disponible)

     console.log(Answer);

        res.status(200).json(Answer)
    })
    
    router.get('/getMarca', async (req, res) => {
        
       const Marcas= await servicio.getMarca();
    
        res.json(Marcas);
    })


    router.put('/UpdateMarca', async (req, res) => {

       const {id,Nombre}= req.body

       const Answer= await servicio.UpdateMarca(id,Nombre);
    
     
        res.json(Answer);
     })
  
    
     router.delete('/DeleteMarca', async (req, res) => {

        const {id}= req.body
 
        const Answer= await servicio.DeleteMarca(id);
     
         res.json(Answer);
      })
    
    return router;
}

