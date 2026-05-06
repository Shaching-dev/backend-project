import dotennv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 3000;

dotennv.config({
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

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.URI}/${process.env.DB_NAME}`);

    // error
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`My server is running on ${port}`);
    });
  } catch (error) {
    console.log(`error`, error);
  }
})();
*/
