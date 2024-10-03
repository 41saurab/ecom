import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_ECOMMERCE_WEB",
    })
    .then(() => {
      console.log(`Connected To Database.`);
    })
    .catch((error) => {
      console.log(`Error Connecting To Database.`, error);
    });
};
