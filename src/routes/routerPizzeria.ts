import { Router } from "express";
import PizzaController from "../controller/pizzeria";
import DB from '../controller/db';

const pizzeriaRouter = Router();

pizzeriaRouter.get('/', DB.testeConnection);
pizzeriaRouter.get('/', PizzaController.getAll);
pizzeriaRouter.post('/', PizzaController.createPizza);

pizzeriaRouter.use('*', (_req, res) => {
    res.status(404).json({ message: 'Resource not found' });
});

export { pizzeriaRouter };