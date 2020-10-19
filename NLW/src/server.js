// Importa as dependecias = biblioteca

const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// Aqui inicia a biblioteca express

const server = express();

//Arquivo estatico

server
  // envio do formulario

  .use(express.urlencoded({ extended: true }))

  // UTILIZAÇÃO DOS ARQUIVOS DO PUBLIC

  .use(express.static("public"))

  // Configurar template -- Handlebars

  .set('views', path.join(__dirname, 'views'))
  .set('view engine' , 'hbs')

  // Rotas da Aplicação
  // console.log(path.join(__dirname, 'views', 'index.html')) ---- COM ESSE CONSOLE.LOG VOCÊ CONSEGUE VER O CAMINHO NO TERMINAL PARA AONDE A ROTA TA APONTANDO

  .get("/", pages.index )
  .get("/orphanage", pages.orphanage )
  .get("/orphanages", pages.orphanages )
  .get("/create-orphanage", pages.createOrphanage )
  .post('/save-orphanage' , pages.saveOrphanage)
// Aqui que liga o servidor
server.listen(5500);