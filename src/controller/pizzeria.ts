import { Request, Response } from 'express';
import Pizza from '../model/pizzeria';


abstract class PizzaController {
    static async getAll(req: Request, res: Response) {
        const pizza = await Pizza.findAll();
        res.status(200).json(pizza);

    }

    // static async createPizza(req: Request, res: Response) {
    //     const { name, description, price, vegetarian, vegan, available } = req.body;
    //     const [pizza, created] = await Pizza.findOrCreate({
    //         where: { name },
    //         defaults: {
    //             name,
    //             description,
    //             price,
    //             vegetarian,
    //             vegan,
    //             available
    //         },
    //     });

    //     res.status(201).json(pizza);
    // }

    static async createPizza(req: Request, res: Response) {
        const { name, description, price, vegetarian, vegan, available } = req.body;


        if (!name || !description || !price || !vegetarian || !vegan || !available)
            return res.status(400).json({ error: 'All data is required' });

        // const stockINT = Number(stock);
        // const costINT = Number(cost);

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



    // static async createPizza(req: Request, res: Response) {
    //     const { name, description, price, vegetarian, vegan, available } = req.body;
    //     const pizza = await Pizza.create({
    //         name, description, price, vegetarian, vegan, available
    //     }) as any;

    //     res.status(201).json({ pizza });
    // }
}

export default PizzaController;
