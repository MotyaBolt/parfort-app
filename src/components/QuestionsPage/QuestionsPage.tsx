import React from "react";
import { TopMenu } from "../TopMenu/TopMenu";

export const QuestionsPage = () => (
  <>
    <TopMenu />
    <div>
      <h1>Questions draft</h1>
      {questionsData.map(
        ({ question, questionData, questionOwner, questionLikes, answers }) => (
          <div></div>
        )
      )}
    </div>
  </>
);

export const questionsData = [
  {
    question: "How much does trip from NY to LA cost?",
    questionData: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionData: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
];
