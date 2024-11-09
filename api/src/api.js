import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import add_rotas from './rotas.js';


const mae = express();

mae.use(cors());
mae.use(express.json());

add_rotas (mae);

mae.listen(process.env.PORT, () => console.log(`api subiu na porta ${process.env.PORT}`))

