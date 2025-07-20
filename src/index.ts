import express, { Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Node + TS!")
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
