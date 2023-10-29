import 'dotenv/config';
import express from 'express';
import { routes } from './routes';

const server = express();
server.use(routes);
const port = String(process.env.SERVER_PORT || process.env.PORT);

server.listen(port, () => console.log(`Server running on port ${port}`));
