import express from "express";

import initMongoose from "./config/mongoose";
import initExpress from "./config/express";
import initRoutes from "./config/routes";

const app = express()
const port = 4000

app.set('root', __dirname);

initExpress(app);
initRoutes(app);
initMongoose(app);

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`App is running on port ${port}`);
});

module.exports = app;
