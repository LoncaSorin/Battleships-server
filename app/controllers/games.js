import * as gamesService from '../service/games';

export async function getGames(req, res, next) {
  try {
    req.resources.games = await gamesService.getGames();
    return next();
  } catch (err) {
    return next(err);
  }
}

export async function createGame(req, res, next) {
  try {
    req.resources.games = await gamesService.createGame(req.body);
    return next();
  } catch (err) {
    return next(err);
  }
}
