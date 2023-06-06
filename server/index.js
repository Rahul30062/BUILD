const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/route");
const UserModel = require("./models/DatabaseSchema");

app.use(express.json());

app.use(cors());
app.use(router);

const db = "mongodb+srv://sawrahul14:Rahul14@cluster0.jz5qjxs.mongodb.net/";
const connectDB = async () => {
  try {
    const connc = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Mongodb Connected");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit();
  }
};
connectDB();

app.listen(8080, () => {
  console.log("Server Running");
});
