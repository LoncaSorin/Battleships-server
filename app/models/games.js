import mongoose from 'mongoose';

import { gameModel } from '../constants/modelsName';
import { gamesCollection } from '../constants/collectionsName';

const { Schema } = mongoose;

const gameSchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  numberOfShots: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
}, {
  timestamps: { currentTime: () => new Date().getTime() },
});

module.exports = mongoose.model(gameModel, gameSchema, gamesCollection);
