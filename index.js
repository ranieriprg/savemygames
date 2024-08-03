const express = require("express");
const { engine } = require("express-handlebars");
const conn = require("./db/conn");

const app = express();
app.use(express.json());

// Configurar Handlebars
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "handlebars");
app.set("views", "./views");

// Middleware para processar dados de formulários
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

//import routes
const gameRoutes = require('./routes/gameRoutes')


//routes 
app.use("/games", gameRoutes);
conn
  .sync()
  .then(() => {
    app.listen(PORT);
  })
  .catch((erro) => {
    console.log(`erro ao conectar ${erro}`);
  });
