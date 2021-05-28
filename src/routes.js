import { Router } from 'express';
import cors from 'cors';

import UserController from './app/controllers/UserController';
import CarController from './app/controllers/CarController';
import AuthController from './app/controllers/AuthController';

import userValidator from './app/validators/Users';
import carValidator from './app/validators/Cars';

import AuthMiddleware from './app/middlewares/Auth';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => {
  res.json({ result: 'route test: API TEDDY OK' });
});

//------------- PUBLIC ROUTES -------------//
routes.post('/login', AuthController.store); //LOGIN
routes.put('/users/:uid', userValidator, UserController.update); //* Atenção aos validators

//------------- PRIVATE ROUTES -------------//
// USER ROUTES
routes.use(AuthMiddleware);
routes.post('/users', userValidator, UserController.store); //* Atenção aos validators
routes.get('/users', UserController.index);
routes.get('/users/:uid', UserController.show);

// CAR ROUTES
routes.post('/cars', carValidator, CarController.store); //* Atenção aos validators
routes.get('/cars', CarController.index);
routes.get('/cars/:uid', CarController.show);
routes.put('/cars/:uid', carValidator, CarController.update); //* Atenção aos validators
routes.delete('/cars/:uid', CarController.delete);

export default routes;
