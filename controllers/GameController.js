const Game = require("../models/Game");

module.exports = class GameController {
  static async listAllGames(req, res) {
    try {
      const games = await Game.findAll({ raw: true });
      res.render('games', { games });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static createGame(req, res) {
    res.render('create');
  }

  static async saveGame(req, res) {
    const { name, genre, platform } = req.body;
    const game = {
      name,
      genre,
      platform,
      // image: image || 'https://via.placeholder.com/150', // Imagem padrão
    };

    try {
      await Game.create(game);
      res.redirect('/');
    } catch (error) {
      res.status(500).send('Erro ao salvar o jogo');
    }
  }

  static async removeGame(req, res) {
    const { id } = req.params;

    try {
      await Game.destroy({ where: { id } });
      res.redirect('/');
    } catch (error) {
      res.status(500).send('Erro ao remover o jogo');
    }
  }
};
