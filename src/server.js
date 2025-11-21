import http from "http";
import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./DB/connectDB.js";

dotenv.config({ path: "./env" });
const server = http.createServer(app);

connectDB()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`Server running on PORT:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Failed To connect", err);
  });
