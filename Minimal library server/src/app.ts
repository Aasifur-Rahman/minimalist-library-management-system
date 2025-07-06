import express, { Application, Request, Response } from "express";
import { booksRoutes } from "./app/controllers/books.controller";
import { borrowRoutes } from "./app/controllers/borrow.controller";
import errorHandler from "./app/middlewares/errorHandler";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://the-archivist.vercel.app"], // your frontend port
  })
);

app.use("/api/books", booksRoutes);

app.use("/api/borrow", borrowRoutes);

app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library Management app");
});

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
