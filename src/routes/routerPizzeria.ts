import { Router } from "express";
import DB from '../controller/database';

import PizzaController from "../controller/pizzeria";



const pizzeriaRouter = Router();

pizzeriaRouter.get('/', DB.testConnection);
pizzeriaRouter.get('/pizzeria', PizzaController.getAll);
pizzeriaRouter.post('/pizzeria', PizzaController.createPizza);

pizzeriaRouter.use('*', (_req, res) => {
    res.status(404).json({ message: 'Resource not found' });
});

export { pizzeriaRouter };