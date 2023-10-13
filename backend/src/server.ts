import 'dotenv/config';
import express from 'express';

const server = express();
const port = String(process.env.SERVER_PORT || process.env.PORT);

server.listen(port, () => console.log(`Server running on port ${port}`));
