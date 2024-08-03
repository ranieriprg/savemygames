const express = require("express");
const router = express.Router();
const GameController = require("../controllers/GameController");

// Rota para listar todos os jogos
router.get("/listarjogos", GameController.listAllGames);
router.get('/', GameController.createGame)

// Rota para adicionar um novo jogo
router.post("/salvarjogo", GameController.saveGame);

module.exports = router;
