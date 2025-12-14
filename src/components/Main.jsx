import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Main() {
  const [questions, SetQuestions] = useState([]);

  useEffect(function () {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []); 
  
  
  return (
    <main>
      <h1>Quizzical</h1>
      <p>A quick quiz to measure how well you really know your stuff.</p>
      <button>Start Quiz</button>
    </main>
  );
}

export default Main;
