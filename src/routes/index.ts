import MainLayout from "@/layouts/MainLayout";
import AllBooks from "@/pages/AllBooks";
import AllBorrowedBooks from "@/pages/AllBorrowedBooks";
import BorrowBook from "@/pages/BorrowBook";
import CreateBook from "@/pages/CreateBook";
import Home from "@/pages/Home";
import SingleBook from "@/pages/SingleBook";
import UpdateBook from "@/pages/UpdateBook";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/books",
        Component: AllBooks,
      },
      {
        path: "/create-book",
        Component: CreateBook,
      },
      {
        path: "/book/:id",
        Component: SingleBook,
      },
      {
        path: "/edit-book/:id",
        Component: UpdateBook,
      },
      {
        path: "/borrow/:bookId",
        Component: BorrowBook,
      },
      {
        path: "/borrow-summary",
        Component: AllBorrowedBooks,
      },
    ],
  },
]);

export default router;
