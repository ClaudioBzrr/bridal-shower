import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const port = String(process.env.SERVER_PORT || process.env.PORT);
const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => console.log(`Server running on port ${port}`));
