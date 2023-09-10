const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
app.use(bodyparser.json());
dotenv.config({ path: "./config.env" });
const Hall = require("./models/hall");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const UserRouter = require("./routes/Users");
const HallRouter = require("./routes/hall");
const BookingRouter = require("./routes/booking");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.DATABASE);
  await console.log(`connected to database`);
  app.use("/user", UserRouter);
  app.use("/hall", HallRouter);
  app.use("/book", BookingRouter);
}

app.listen(4001, () => {
  console.log(`server is listening on port 4001`);
});
