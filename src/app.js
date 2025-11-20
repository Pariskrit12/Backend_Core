import express from "express";

import cors from "cors";
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send(`Hey Bitch ${process.env.PORT}`);
});
export { app };
