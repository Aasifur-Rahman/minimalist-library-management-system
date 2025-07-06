import mongoose, { model, Schema } from "mongoose";
import { IBookModel, IBooks } from "../interfaces/books.interface";

const bookSchema = new Schema<IBooks, IBookModel>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      uppercase: true,
      enum: {
        values: [
          "FICTION",
          "NON_FICTION",
          "SCIENCE",
          "HISTORY",
          "BIOGRAPHY",
          "FANTASY",
        ],
        message: "Genre is not valid. got {VALUE} genre",
      },
    },
    isbn: {
      type: String,
      required: true,
      unique: [true, "isbn number already exists"],
    },
    description: {
      type: String,
      trim: true,
    },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies must be a positive number"],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, versionKey: false }
);

bookSchema.method("deductCopies", async function (qty: number) {
  this.copies -= qty;
  if (this.copies == 0) {
    this.available = false;
  }
  await this.save();
});

export const Book = mongoose.model<IBooks, IBookModel>("Book", bookSchema);
