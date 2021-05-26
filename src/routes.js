import { Router } from 'express';
import cors from 'cors';

import UserController from './app/controllers/UserController';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => {
  res.json({ result: 'teste: API TEDDY OK' });
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

export default routes;
