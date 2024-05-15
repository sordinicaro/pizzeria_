import express, { json } from "express"
import { pizzeriaRouter } from "./routes/routerPizzeria";

const app = express();
app.use(json());


app.use("/", pizzeriaRouter);
app.use("*", (req, res) =>
    res.status(404).json({ error: "Resource not found" }))

export default app;