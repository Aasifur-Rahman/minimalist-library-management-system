import App from "@/App";
import BookDetails from "@/pages/BookDetails";
import Books from "@/pages/Books";
import BookSummary from "@/pages/BookSummary";
import BorrowBook from "@/pages/BorrowBook";
import EditBook from "@/pages/EditBook";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/books",
        element: <Books />,
      },

      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },

      {
        path: "/borrow-book/:id",
        element: <BorrowBook />,
      },

      {
        path: "/borrow-summary",
        element: <BookSummary />,
      },
    ],
  },
]);

export default router;
