import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "../src/components/App/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../src/components/ErrorPage/ErrorPage";
import { QuestionsPage } from "../src/components/QuestionsPage/QuestionsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
