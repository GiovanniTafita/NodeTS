import dotenv from 'dotenv';
import "reflect-metadata";
import { app } from './app';
import AppLogger from './lib/logger';
import { connectDB } from './database/connection';

dotenv.config();
const port = parseInt(process.env.PORT as string, 10) || 7000;
const hostname = process.env.HOST || "0.0.0.0";
const server = app;

server.listen(port, hostname, () => {
  connectDB();
  AppLogger.http(`⚡️[server]: Server is running at http://${hostname}:${port}`);
});