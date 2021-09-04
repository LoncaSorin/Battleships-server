import cors from 'cors';
import * as bodyParser from 'body-parser';
import methodOverride from 'method-override';

export default function initExpress(app) {
  app.use(cors());
  app.options('*', cors());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use((req, res, next) => {
    req.resources = req.resources || {};
    next();
  });
}
