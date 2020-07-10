//importa express
const express = require('express');
const path = require('path');
const router = require('./routes');
const configs = require('./config');
const bodyparse = require('body-parser');
const db = require('./config/database');

db.authenticate()
 .then(()=>console.log('DB Conectada'))
 .catch(error => console.log(error))

//Configurar express
const app = express();


//Validar si estamos en desarrollo o producción
const config = configs[app.get('env')];

app.locals.titulo = config.nombresitio;

//Habilitar pug
app.set('view engine','pug');

//añadir la vistas
app.set('views', path.join(__dirname, './views'));

//cargar una carpeya estatica llamada public 
app.use(express.static('public'))

//Muestra el año actual
app.use((req, res, next) =>{

    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();


})

//ejecutamos bodyparse
app.use(bodyparse.urlencoded({extended : true}));


app.use('/',router())

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port,host, () =>{
    console.log('El servidor esta levantado');
} );
