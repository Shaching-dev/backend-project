import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 3000;

dotenv.config({
  path: "./",
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`My server is running on ${port}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);
  });
