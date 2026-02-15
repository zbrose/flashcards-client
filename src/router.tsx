import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import CreateForm from "./pages/CreateForm";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/create",
    Component: CreateForm,
  },
]);
