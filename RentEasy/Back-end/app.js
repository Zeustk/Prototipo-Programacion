//get: sirve para devolver cosas
//post:recibir dato y guardalo en bd y devolver una respuesta a la app que ha enviado los datos
//put: toma los datos del front-end y los actualiza en una bd u otra cosa y devolver algo
//delete:toma la peticion y elimina algo dentro del servidor y devuelve una respuesa

//app.all ejecuta antes teniendo en cuenta la ruta y con el next hace que sigan las otras app con esa ruta

//midleware: se ejecuta antes de todas las rutas



//Requires

const express = require("express"); //Constante que va a requerir el modulo express
const morgan=require("morgan");
const app = express() //Se crea el servidor, el servidor es app
const path=require('path');
const DB = require('./db');

//Importancion de modulo
const ServicioMarcas=require('./services/GestionMarcasService');
const ServicioClientes=require('./services/GestionClienteService')

//Instancias de los modulos
const serviciomarcaI=new ServicioMarcas(DB);
const ServicioClienteI=new ServicioClientes(DB);

//Routes (API)
const MarcasRoutes= require('./routes/GestionMarcasRoutes')(serviciomarcaI); //Se le pasa el servicio con su base
const ClienteRoutes=require('./routes/GestionClientesRoutes')(ServicioClienteI);


const port = 5000; //puerto

//SETS

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



//MIDLEWARE
app.use(express.json()) //Para que comprenda formato Json
app.use(express.text()) //Para que comprenda formato text
app.use(morgan('dev')); //ejecutar el midleware
app.use(express.urlencoded({extended:false})) //Para que entienda los datos de formulario y el extended significa que solo es texto, no es algo complicado
app.use('/public',express.static(path.join(__dirname,'public')))  


//ROUTES (Ejecucion)
app.use(MarcasRoutes);
app.use(ClienteRoutes);





app.use((req, res) => {
    res.status(404).send('No se encontro tu pagina'
    )
})

 //Permite enviar archivos al front-end como html,css, javascrip (no cambian)

app.listen(port, () => {
    console.log(`Aplicacion en linea Puerto ${port}`)
}) //Corre la aplicacion por el puerto 3000


