import express, { Express, Request, Response } from "express";
import compression from "compression"
import cors from "cors";
import morganMiddleware from "./middleware/morgan.middleware";
import AppLogger from "./lib/logger";
import "reflect-metadata"

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(morganMiddleware);

app.get('/api', (req: Request, res: Response) => {
  AppLogger.http("Hello word");
  res.status(200).json({ message: 'Hello word' });
})

