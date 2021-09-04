import path from 'path';

export default function initRoutes(app) {
  const routesPath = path.join(__dirname, '../app/routes');
  const routes = ['games'];

  routes.forEach((route) => {
    const finalPath = `${routesPath}/${route}`;
    //  eslint-disable-next-line
    app.use('/api', require(finalPath));
  });
}
