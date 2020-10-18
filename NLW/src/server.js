// Importa as dependecias = biblioteca

const express = require("express");
const path = require("path");

// Aqui inicia a biblioteca express

const server = express();

//Arquivo estatico

server
  .use(express.static("public"))

  // Configurar template -- Handlebars

  .set('views', path.join(__dirname, 'views'))
  .set('view engine' , 'hbs')

  // Um caminho para rota
  // console.log(path.join(__dirname, 'views', 'index.html')) ---- COM ESSE CONSOLE.LOG VOCÊ CONSEGUE VER O CAMINHO NO TERMINAL PARA AONDE A ROTA TA APONTANDO

  .get("/", (request, response) => {
    return response.render('index')
  })

// Aqui que liga o servidor
server.listen(5500);