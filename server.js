import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(cors());

// Use default middlewares and router
server.use(middlewares);
server.use(router);

// Start server
const PORT = process.env.PORT || 3005;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});