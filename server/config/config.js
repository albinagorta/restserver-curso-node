//========================
//PUERTO
//========================
process.env.PORT = process.env.PORT || 3000;

//========================
//ENTORNO
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//========================
//VENCIMIENTO DEL TOKEN
//========================
//60 segundos
//60 minutos
//24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//========================
//SEED DE AUTENTICACION
//CREAR VARIABLE EN HEROKU: heroku config:set SEED=""
//========================
process.env.SEED = process.env.SEED || 'sete-es-el-seed-desarrollo';



//========================
//BASE DE DATOS
//========================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.urlDB = urlDB;

//========================
//Base de datos
//========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '699611558065-d7vhff17ej73mvoepe8nd9di2aq6igbf.apps.googleusercontent.com';