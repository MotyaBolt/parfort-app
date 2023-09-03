import React from "react";
import "./QuestionsPage.scss";

type QuestionItemType = {
  question: string;
  questionDate: string;
  questionOwner: string;
  questionLikes: number;
  answers: number;
};
const QuestionItem = ({
  question,
  questionDate,
  questionOwner,
  questionLikes,
  answers,
}: QuestionItemType) => (
  <div className="QuestionList_Item_Row">
    <div>{questionDate}</div>
    <div>{question}</div>
    <div>{questionOwner}</div>
    <div>Likes: {questionLikes}</div>
    <div>Answers: {answers}</div>
  </div>
);

export const QuestionsPage = () => (
  <div>
    <div className="QuestionsList_Title">Questions</div>
    <div className="QuestionsList_Description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
    <div className="QuestionsList">
      {questionsData.map(
        ({ question, questionDate, questionOwner, questionLikes, answers }) => (
          <QuestionItem
            question={question}
            questionDate={questionDate}
            questionOwner={questionOwner}
            questionLikes={questionLikes}
            answers={answers}
          />
        )
      )}
    </div>
  </div>
);

export const questionsData = [
  {
    question: "How much does trip from NY to LA cost?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
  {
    question: "What is your favourite place in Milan?",
    questionDate: "13.08.2023",
    questionOwner: "Adam",
    questionLikes: 123,
    answers: 12,
  },
];
