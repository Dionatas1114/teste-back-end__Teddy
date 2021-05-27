import { Router } from 'express';
import cors from 'cors';

import UserController from './app/controllers/UserController';
import CarController from './app/controllers/CarController';

import userValidator from './app/validators/Users';
import carValidator from './app/validators/Cars';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => {
  res.json({ result: 'route test: API TEDDY OK' });
});

routes.post('/users', userValidator, UserController.store); //* Atenção aos validators
routes.get('/users', UserController.index);
routes.get('/users/:uid', UserController.show);
routes.put('/users/:uid', userValidator, UserController.update); //* Atenção aos validators

routes.post('/cars', carValidator, CarController.store); //* Atenção aos validators
routes.get('/cars', CarController.index);
routes.get('/cars/:uid', CarController.show);
routes.put('/cars/:uid', carValidator, CarController.update); //* Atenção aos validators
routes.delete('/cars/:uid', CarController.delete);

export default routes;
