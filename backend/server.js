import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server Listing On Port ${process.env.PORT}.`);
});
