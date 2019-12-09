const express= require('express');       //importando o express
const mongoose = require('mongoose');
const requireDir = require('require-dir');  //npm install require-dir
const cors = require('cors');    //controle de acessos de domínios

//Iniciando o app
const app = express();    //chamando a função express
app.use(express.json());
app.use(cors());

//Iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true,useNewUrlParser: true});
requireDir('./src/models'); //registrando o model
//const Product = mongoose.model('Product');

app.use('/api', require('./src/routes')); //rotas


app.listen(3001);    //direcionando a porta 3001