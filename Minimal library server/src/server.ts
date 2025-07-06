import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const PORT = 5000;

let server: Server;

async function main() {
  try {
    await mongoose.connect(process.env.mongo_URI as string);
    console.log("Connected to Mongodb using mongoose");
    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
