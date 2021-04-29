import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/post.js"

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extented: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extented: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    author: "Mert Yusa Atağ",
    message: "junior to master",
  });
});

app.use("/posts",postRoutes);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port " + port);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
