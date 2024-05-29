import { useState } from "react";
import { questions } from "../data/questions";

const FlashCards = () => {
  const [answers, setAnswer] = useState(Array(questions.length).fill(false));

  const handleShowAnswer = (idx) =>
    setAnswer((curr) => curr.map((value, i) => (i === idx ? !value : value)));

  return (
    <div className="flashcards">
      {questions.map((q, i) => (
        <div
          key={q.id}
          className={answers[i] ? "selected" : ""}
          onClick={() => handleShowAnswer(i)}
        >
          {answers[i] ? q.answer : q.question}
        </div>
      ))}
    </div>
  );
};

export default FlashCards;
