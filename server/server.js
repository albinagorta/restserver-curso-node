require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//CONFIGURACION GLOBAL DE RUTAS
app.use(require('./routes/index'));


mongoose.connect(process.env.urlDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err, res) => {
        if (err) throw err;
        console.log("Base de datos en linea");
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});