import React from "react";
import { TopMenu } from "../TopMenu/TopMenu";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuestionsPage } from "../QuestionsPage/QuestionsPage";

export const App = () => (
  <div className="App">
    <TopMenu />
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="" />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
