import "dotenv/config";

import express from "express";
import cors from "cors";
import "./database/db.js";
import router from "./routes/router.js";
const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  try {
    console.log(`the server is running at ${port}`);
  } catch (error) {
    console.log(error);
  }
});
