import dotenv from 'dotenv';
import "reflect-metadata";
import { app } from './app';
import AppLogger from './lib/logger';

dotenv.config();
const port = parseInt(process.env.PORT as string, 10) || 7000;
const hostname = process.env.HOST || "0.0.0.0";
const server = app;

server.listen(port, hostname, () => {
  AppLogger.http(`⚡️[server]: Server is running at http://${hostname}:${port}`);
});