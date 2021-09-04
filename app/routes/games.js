import express from "express";
import * as gamesCtrl from '../controllers/games';
import { responseToJSON } from '../controllers/common';

const router = express.Router();

router.get('/games',
  gamesCtrl.getGames,
  responseToJSON('games'));

router.post('/game',
  gamesCtrl.createGame,
  responseToJSON('games'));

module.exports = router;
