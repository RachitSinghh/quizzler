import React from "react";
import { useState } from "react";
import { Data } from "../utils/data";
function Main() {
  const [quizs, setQuizs] = useState([
    {
      index: 1,
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correctAnswer: "Final",
      incorrectAnswers: ["Static", "Private", "Public"],
    },
    {
      index: 2,
      question:
        "Which computer hardware device provides an interface for all other connected devices to communicate?",
      correctAnswer: "Motherboard",
      incorrectAnswers: [
        "Central Processing Unit",
        "Hard Disk Drive",
        "Random Access Memory",
      ],
    },
  ]);
  const [screen, setScreen] = useState(false);

  function handleClick() {
    setScreen((prevScreen) => !prevScreen);
  }

  const quizElement = quizs.map((quiz) => {
    // const inCorrectAnswers
    return (
      <div key={quiz.index}>
        <h2>{quiz.question}</h2>
        <span>
          ${quiz.correctAnswer}, ${quiz.incorrectAnswers}
        </span>
      </div>
    );
  });
  return (
    <main>
      {screen ? (
        <div>{quizElement}</div>
      ) : (
        <div>
          <h1>Quizzical</h1>
          <p>A quick quiz to measure how well you really know your stuff.</p>
        </div>
      )}
      <button onClick={handleClick}>Start Quiz</button>
    </main>
  );
}

export default Main;

// useEffect(function () {
//   fetch(
//     "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }, []);
