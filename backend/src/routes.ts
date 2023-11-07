import { Router } from 'express';
import { UserController } from './controllers/user-controller';
import { ItemController } from './controllers/item-controller';

export const routes = Router();
const userController = new UserController();
const itemController = new ItemController();

// users
routes.post('/user', userController.create);
routes.post('/login', userController.login);

// items
routes.get('/items', itemController.find);
routes.post('/item', itemController.create);
routes.post('/all-items', itemController.findAll);
routes.post('/submit', itemController.submitForm);

// admin
routes.post('/admin', userController.createAdmin);
