import { useState, useEffect } from "react";

function Main() {
  const [quizs, setQuizs] = useState([]);
  const [screen, setScreen] = useState(false);
  const getQuizAsync = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple",
      );
      // console.log("Response =========", response);
      if (response.ok) {
        const responseJson = await response.json();
        setQuizs(responseJson.results);
      } else {
        console.log("Couldn't fetch api");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(function () {
    getQuizAsync();
  }, []);

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
      {/* we have another thing to do

        if we're a in intial screen the button should be "Start Quiz"
        if we're a in a question screen button should return "check answer"
        */}
      {screen ? (
        <button>Check Answer</button>
      ) : (
        <button onClick={handleClick}>Start Quiz</button>
      )}
    </main>
  );
}

export default Main;
