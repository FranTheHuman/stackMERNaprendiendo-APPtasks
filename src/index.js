const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

const { mongoose } = require('./database');

// Settings 
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // cada vez que un dato llegue a nuestro servidor va a pasar por esta funcion y va a comprobar si es un dato json
app.use(morgan('dev'));

// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Server
app.listen(port, () => { console.log(`Server on port ${port}`)});