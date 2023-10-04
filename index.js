const jsonServer = require("json-server");
const server =  jsonServer.create();
const router = jsonServer.router("bd.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; //CUALQUIER PUERTO

server.use(middlewares);
server.use(router);
server.listen(port);