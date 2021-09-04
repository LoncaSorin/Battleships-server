export function responseToJSON(prop, statusCode) {
  return function lastMiddleware(req, res) {
    console.log(req.resources[prop]);
    return res.status(statusCode || 200).json(req.resources[prop]);
  };
}
