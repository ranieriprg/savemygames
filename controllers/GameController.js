const Game = require("../models/Game");

module.exports = class GameController {
  static async gameFindAll(req, res) {
    const games = await Game.findAll();
    res.render("games", { games });
  }

  static async saveGame(req, res) {
    const { name, genre, platform } = req.body;
    if (!name) {
      res.send(console.log("name é necessario"));
    }
    if (!genre) {
      res.send(console.log("nagenreme é necessario"));
    }
    if (!platform) {
      res.send(console.log("platform é necessario"));
    }

    Game.create({ name, genre, platform })
      .then(res.redirect("/games"))
      .catch((error) => {
        console.log(`Erro ao salvar jogo ${error}`);
      });
  }
  static games(req, res) {
    res.render("GAMES PLATAFORM");
  }
};
