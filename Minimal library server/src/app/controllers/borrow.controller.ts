import express, { NextFunction, Request, Response } from "express";
import { Book } from "../models/books.model";
import { Borrow } from "../models/borrow.model";

export const borrowRoutes = express.Router();

borrowRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookDetails",
        },
      },
      { $unwind: "$bookDetails" },
      {
        $project: {
          _id: 0,
          book: {
            title: "$bookDetails.title",
            isbn: "$bookDetails.isbn",
          },
          totalQuantity: "$totalQuantity",
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error) {
    res.status(400).json({
      message: "No Borrowed books found",
      success: false,
    });
  }
});

borrowRoutes.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await Book.findById(req.body.book);

      if (data) {
        await data.deductCopies(req.body.quantity);

        if (data.copies < req.body.quantity) {
          res.status(404).json({
            success: false,
            message: "Not enough copies available",
          });
        }

        const borrowBook = await Borrow.create(req.body);

        res.status(201).json({
          success: true,
          message: "Book borrowed successfully",
          data: borrowBook,
        });
      } else {
        res.status(404).json({ success: false, message: "Book Not Found" });
      }
    } catch (error: any) {
      next(error);
    }
  }
);
