import AppLogger from "../lib/logger";
import { AppDataSource } from "./data-source";

export const connectDB = async () => AppDataSource.initialize()
  .then(() => {
    AppLogger.info("Database is running...");
  })
  .catch((error) => AppLogger.error(error))