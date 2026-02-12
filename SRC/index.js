const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// Configuraciones del servidor
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Endpoint raíz
app.get('/', (req, res) => {
  res.json({
    title: "API Operaciones Básicas"
  });
});

// Función para validar números
function validarNumeros(num1, num2, res) {
  if (num1 === undefined || num2 === undefined) {
    res.status(400).send({ error: 'Faltan números' });
    return false;
  }
  return true;
}

// SUMA
app.post('/sumar', (req, res) => {
  const { num1, num2 } = req.body;
  if (!validarNumeros(num1, num2, res)) return;

  const resultado = num1 + num2;
  res.send({ resultado });
});

// RESTA
app.post('/restar', (req, res) => {
  const { num1, num2 } = req.body;
  if (!validarNumeros(num1, num2, res)) return;

  const resultado = num1 - num2;
  res.send({ resultado });
});

// MULTIPLICACIÓN
app.post('/multiplicar', (req, res) => {
  const { num1, num2 } = req.body;
  if (!validarNumeros(num1, num2, res)) return;

  const resultado = num1 * num2;
  res.send({ resultado });
});

// DIVISIÓN
app.post('/dividir', (req, res) => {
  const { num1, num2 } = req.body;
  if (!validarNumeros(num1, num2, res)) return;

  if (num2 === 0) {
    return res.status(400).send({ error: 'No se puede dividir entre cero' });
  }

  const resultado = num1 / num2;
  res.send({ resultado });
});

// Iniciar servidor
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});
