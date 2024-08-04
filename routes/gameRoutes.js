const express = require("express");
const router = express.Router();
const GameController = require("../controllers/GameController");

// Rota para listar todos os jogos
router.get("/", GameController.listAllGames);

// Rota para exibir o formulário de criação de jogo
router.get('/salvarjogo', GameController.createGame);

// Rota para salvar um novo jogo
router.post("/salvarjogo", GameController.saveGame);

router.delete('/removegame/:id', GameController.removeGame)

module.exports = router;
