// ************ Require's ************
const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const mysql = require('mysql');
const cors = require('cors');




// ************ express() ************
const app = express();


// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE








// Conexion


// Cambiar parametros de configuración !!!!!!!!!!!
const connection = mysql.createConnection({
  host: 'mysql-juanmauro.alwaysdata.net',
  user: 'juanmauro',
  password: 'Tostadora1',
  database: 'juanmauro_triplanner'
});


connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});




 
// rutas y consultas !!!!!!!!!!!!!!!!!




app.post( "/Cargarproducto" ,  (req, res) => {
  let datos = req.body.datosProducto;
 
  connection.query(
    'INSERT INTO Servicio (Nombre,Imagen,Direccion,Precio,CiudadId,TipoServicioId) values ("'+datos[0]+'" , "'+ datos[1]+'","'+ datos[2]+'","'+ datos[3]+'","'+ datos[4]+'","'+ datos[5]+'") ;',
  (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
});






/*   app.get( "/obtenerProductosParis" ,  (req, res) => {
    let ciudad= req.body.ciudadId
    connection.query(
      'SELECT Nombre,Imagen,Direccion,Precio,CiudadId,TipoServicioId FROM Servicio WHERE CiudadId=7',
    (err,rows) => {
      if(err) throw err;
      res.json(rows);
    });
  }); */








  app.get('/obtenerServiciosPorTipo', (req, res) => {
    const tipoServicioId = req.query.tipoServicioId;
    const ciudadId = req.query.ciudadId;
    connection.query(
      'SELECT Nombre, Imagen, Direccion, Precio, CiudadId, TipoServicioId FROM Servicio WHERE CiudadId = ? AND TipoServicioId = ?',
      [ciudadId, tipoServicioId],
      (err, rows) => {
        if (err) throw err;
        res.json(rows);
      }
    );
  });










  app.get( "/obtenerciudades" ,  (req, res) => {
    connection.query(
      'SELECT Id,Nombre FROM Ciudad',
    (err,rows) => {
      if(err) throw err;
      res.json(rows);
    });
  });


  app.get( "/obtenertiposervicio" ,  (req, res) => {
    connection.query(
      'SELECT Id,Nombre FROM Tipo_Servicio',
    (err,rows) => {
      if(err) throw err;
      res.json(rows);
    });
  });








app.get( "/actor_j" ,  (req, res) => {
  connection.query('SELECT * FROM actors WHERE first_name="Johnny" and last_name="Depp"', (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
});






app.post( "/cargar_actor" ,  (req, res) => {
  let actor = req.body.actorcito;
  connection.query('INSERT INTO actors (first_name, last_name, rating, favorite_movie_id) values ("'+ actor +'", "pepe", "3","1")', (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
});






// ************ Route System require and use() ************












// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));


// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
  res.status(err.status || 500);
});


// ************ exports app ************
module.exports = app;