import { Model } from "mongoose";

export interface IBooks {
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

export interface BookcopyDecreaseMethod extends Model<IBooks> {
  deductCopies(qty: number): Promise<void>;
}

export type IBookModel = Model<IBooks, {}, BookcopyDecreaseMethod>;
