import Games from '../models/games';

export async function getGames() {
  return Games.find().exec();
}

export async function createGame(gameData) {
  const game = new Games(gameData);
  const resultGames = await game.save();

  return resultGames;
}
