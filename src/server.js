import http from "http";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./env" });
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running on PORT:${process.env.PORT}`);
});
