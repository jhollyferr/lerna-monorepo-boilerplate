import express from "express";
import cors, { CorsOptions } from "cors";
const app = express();
const port = 3001;

const options: CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
  preflightContinue: false,
};

app.use(cors(options));

app.get("/data", (req, res) => {
  res.json({ message: "Hello Word" });
});

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
