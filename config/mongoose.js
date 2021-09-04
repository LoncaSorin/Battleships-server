import { MONGO_URL } from "./constants";
import mongoose from 'mongoose';

export default function initMongoose() {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: true,
  }).catch((err) => console.log('err', err));

  const db = mongoose.connection;

  db.once('open', () => {
    console.log('connected to mongoDB');
  });
}

export function closeMongoose() {
  return mongoose.connection.close();
}
