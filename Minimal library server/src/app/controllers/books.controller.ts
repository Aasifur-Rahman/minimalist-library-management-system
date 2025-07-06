import express, { Request, Response } from "express";
import { Book } from "../models/books.model";

export const booksRoutes = express.Router();

booksRoutes.get("/", async (req: Request, res: Response) => {
  const genre = req.query.filter?.toString().toUpperCase();
  const limit = Number(req.query.limit);
  const sortBy = req.query.sortBy?.toString();
  const sortOrder = req.query.sort === "desc" ? -1 : 1;

  try {
    const query: any = {};

    if (genre) query.genre = genre;

    const sortOption = sortBy ? { [sortBy]: sortOrder } : {};

    const data = await Book.find(query)
      .sort(sortOption as any)
      .limit(limit);

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to retrieve books",
      success: false,
      error: error,
    });
  }
});

booksRoutes.get("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const data = await Book.findById(bookId);

    if (!data) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to retrieve book",
      error: error.errors,
    });
  }
});

booksRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await Book.create(body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to create book",
      error: error.message,
    });
  }
});

booksRoutes.put("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const updatedBody = req.body;
    const data = await Book.findByIdAndUpdate(bookId, updatedBody, {
      new: true,
    });

    if (!data) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to update book",
      error: error.message,
    });
  }
});

booksRoutes.delete("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const data = await Book.findByIdAndDelete(bookId);

    if (!data) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to delete book",
      error: error.message,
    });
  }
});
