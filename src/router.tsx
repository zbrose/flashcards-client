import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import CreateForm from "./pages/CreateForm/CreateForm";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/create",
        Component: CreateForm,
      },
    ],
  },
]);
