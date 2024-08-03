const Game = require("../models/Game");

module.exports = class GameController {
  static listAllGames = async (req, res) => {
    try {
      const games = await Game.findAll({raw: true});
      res.render('games', { games });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  static createGame = (req, res) => {
    res.render('create');
  };
  
  static saveGame = async (req, res) => {
    console.log("metodo para salvar jogos");
    const game = {
      name: req.body.name,
      genre: req.body.genre,
      platform: req.body.platform,
    };
    console.log(game);
    
    if(!game.name) {
      console.log('O campo nome está vazio');
      return res.status(400).send('O campo nome está vazio');
    }
    if(!game.genre) {
      console.log('O campo genero está vazio');
      return res.status(400).send('O campo genero está vazio');
    }
    if(!game.platform) {
      console.log('O campo plataforma está vazio');
      return res.status(400).send('O campo plataforma está vazio');
    }
  
    try {
      await Game.create(game);
      console.log('jogo criado com sucesso');
      res.redirect('/listarjogos');
    } catch (error) {
      console.log('error ao salvar', error);
      res.status(500).send('Error ao salvar o jogo');
    }
  };
};
