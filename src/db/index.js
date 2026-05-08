import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.URI}/${process.env.DB_NAME}`
    );

    console.log(
      `\n MongoDB Coonected !! DB HOST ${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.log("Mongodb connection FAILED", error);
    process.exit(1);
    // throw error
  }
};

export default connectDB;
