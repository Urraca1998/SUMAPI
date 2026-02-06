const express = require('express');
const app = express();
const morgan=require('morgan');
const cors = require('cors'); // Importa el paquete cors   npm install cors
 
//Configuraciones  servidor
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors()); // Agrega el middleware CORS

 
//Nuestro primer WS Get  // A ESTAS RUTAS SE CONOCEN COMO END
app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})

// Endpoint para sumar dos números
app.post('/sumar', (req, res) => { // http://localhost/sumar
  const { num1, num2 } = req.body;// se declaran los datos de entrada

  // Validar que se hayan enviado los dos números  que no esten vacio
  if (!num1 || !num2) {
    return res.status(400).send({ error: 'Faltan números para sumar' });
  }

  // Sumar los números
  const resultado = num1 + num2;

  // Enviar el resultado

  res.send({ resultado });
});



//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});