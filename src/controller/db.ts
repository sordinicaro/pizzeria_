import { Request, Response } from "express";
import sequelize from "../model/db";


abstract class DB {
    static async testeConnection(req: Request, res: Response) {
        try {
            await sequelize.authenticate();
            res.status(200).json({
                project: "API REST with sequeleze",
                version: "1.0.0",
                dbConnection: "Connection has been established successfully.",
            });
        } catch (error) {
            res.status(503).json({
                project: "API REST with sequeleze",
                version: "1.0.0",
                dbConnection: "Unable to connect to the database",
            });
        }

    }
}

export default DB;