import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../src/components/ErrorPage/ErrorPage";
import { QuestionsPage } from "../src/components/QuestionsPage/QuestionsPage";
import { Home } from "../src/components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "/questions", element: <QuestionsPage /> },
]);

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Root not found");
}
