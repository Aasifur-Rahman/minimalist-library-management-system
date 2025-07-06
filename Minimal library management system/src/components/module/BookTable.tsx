import { BookDown, Edit, Trash, View } from "lucide-react";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Link } from "react-router";
import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/bookApi";
import type { IBook } from "@/types/booktype";
import { toast } from "react-hot-toast";
import { DotLoader } from "react-spinners";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function BookTable() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [deleteBook] = useDeleteBookMutation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[800px]">
        <DotLoader color="#daa83a" size={67} />
      </div>
    );
  }

  if (error) {
    toast.error("Something went wrong");
  }

  const handleDelete = (id: string) => {
    setSelectedBookId(id);
    setOpenDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (selectedBookId) {
      await deleteBook(selectedBookId);
      setOpenDeleteModal(false);
      setSelectedBookId(null);
    }
  };

  return (
    <div className="p-5 shadow-2xl rounded-lg ">
      <Table className="w-full rounded-md shadow-sm">
        <TableHeader className=" rounded-xl bg-accent">
          <TableRow className=" ">
            <TableHead className="text-center font-bold">Title</TableHead>
            <TableHead className="text-center font-bold">Author</TableHead>
            <TableHead className="text-center font-bold">Genre</TableHead>
            <TableHead className="text-center font-bold">ISBN</TableHead>
            <TableHead className="text-center font-bold">Copies</TableHead>
            <TableHead className="text-center font-bold">Status</TableHead>
            <TableHead className="text-center font-bold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((book: IBook) => (
            <TableRow key={book.isbn}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell className="text-center border">
                {" "}
                {book.available ? (
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Available
                  </span>
                ) : (
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Unavailable
                  </span>
                )}
              </TableCell>
              <TableCell className="flex justify-evenly gap-2 items-center">
                <Link
                  className="flex justify-center gap-2 items-center "
                  to={`/book-details/${book._id}`}
                >
                  <Button
                    variant="outline"
                    className="bg-blue-100 hover:bg-blue-400"
                  >
                    <View />
                    View
                  </Button>
                </Link>
                <Link
                  className="flex justify-center gap-2 items-center "
                  to={`/edit-book/${book._id}`}
                >
                  <Button
                    variant="outline"
                    className="bg-orange-100 hover:bg-amber-700"
                  >
                    <Edit />
                    Edit
                  </Button>
                </Link>
                {book.available ? (
                  <Link
                    className="flex justify-center gap-2 items-center "
                    to={`/borrow-book/${book._id}`}
                  >
                    <Button
                      variant="outline"
                      className="bg-green-100 hover:bg-green-900"
                    >
                      <BookDown />
                      Borrow
                    </Button>
                  </Link>
                ) : (
                  <Link
                    to={`/borrow-book`}
                    className="flex justify-center gap-2 items-center "
                  >
                    <Button
                      className="bg-green-100 hover:bg-green-900"
                      variant="outline"
                      disabled={true}
                    >
                      Borrow
                    </Button>
                  </Link>
                )}
                <div className="flex justify-center gap-2 items-center ">
                  <Button
                    onClick={() => handleDelete(book._id as string)}
                    variant="outline"
                    className="bg-red-100 hover:bg-red-900"
                  >
                    <Trash />
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
