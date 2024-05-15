import { Request, Response } from 'express';
import Pizza from '../model/pizzeria';


abstract class PizzaController {
    static async getAll(req: Request, res: Response) {
        const pizza = await Pizza.findAll();
        res.status(200).json(pizza);

    }


    static async createPizza(req: Request, res: Response) {
        const { name, description, price, vegetarian, vegan, available } = req.body;

        if (name === undefined || description === undefined || price === undefined || vegetarian === undefined || vegan === undefined || available === undefined)
            return res.status(400).json({ error: 'All data is required' });

        const newPizza = (await Pizza.create({
            name,
            description,
            price,
            vegetarian,
            vegan,
            available
        })) as any;


        res.status(201).json({ newPizza });
    }

}

export default PizzaController;
