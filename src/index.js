import dotennv from "dotenv";
import connectDB from "./db/index.js";

dotennv.config({
  path: "./",
});

connectDB();

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
