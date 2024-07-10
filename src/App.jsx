import React, { useState } from "react";

const App = () => {
  const quizzes = [
    {
      question: "What is the capital of France?",
      choices: ["London", "Paris", "Berlin", "Rome"],
      answer: 1,
    },
    {
      question: "What is the tallest mountain in the world?",
      choices: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: 0,
    },
    {
      question: "What year did the first iPhone launch?",
      choices: ["2004", "2005", "2006", "2007"],
      answer: 3,
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: 0,
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: [
        "Leonardo da Vinci",
        "Michelangelo",
        "Raphael",
        "Sandro Botticelli",
      ],
      answer: 0,
    },
  ];
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [scoreBoard, setScoreBoard] = useState(false);
  const [score, setScore] = useState(0);

  const handleChooseBtn = (event) => {
    const chosenAnswer = parseInt(event.target.value);
    const correctAnswer = quizzes[currentQuiz].answer;
    correctAnswer === chosenAnswer && setScore(score + 1);
    if (currentQuiz + 1 < quizzes.length) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      setScoreBoard(true);
    }
  };

  const handleRetryBtn = () => {
    setCurrentQuiz(0);
    setScore(0);
    setScoreBoard(false);
  }

  return (
    <main className="w-screen min-h-screen flex flex-col  bg-gradient-to-r from-purple-400 via-pink-300 to-red-300 items-center justify-center">
      {scoreBoard && (
        <section className="w-[600px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-lg shadow-lg p-8 max-w-sm flex flex-col items-center gap-8">
          <p className="pb-2 border-b-2 border-gray-200"> 
            {" "}
            Score : {score} out of {quizzes.length}
          </p>
          <button
          onClick={handleRetryBtn}
           className="bg-black/5 px-4 py-2 border rounded-lg active:scale-95 duration-150 text-sm"> 
            Retry
          </button>
        </section>
      )}

      <section
        className={`${
          scoreBoard && "hidden"
        } w-[600px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-lg shadow-lg p-8 max-w-sm`}
      >
        <div className="mb-6 flex justify-between">
          <h1 className="font-bold text-2xl text-blue-800">Quizzes</h1>
          <div className="border rounded-full px-1 text-xs flex justify-center items-center gap-0.5 bg-black/10">
            <span className="">Current Quiz :</span>
            <span>{currentQuiz + 1}</span> / <span>{quizzes.length}</span>
          </div>
        </div>
        <div className="border-b pb-5 mb-7">
          <h1 className="text-lg font-semibold text-gray-600">
            {quizzes[currentQuiz].question}
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          {quizzes[currentQuiz].choices.map((choose, index) => (
            <button
              key={index}
              value={index}
              onClick={handleChooseBtn}
              className="border rounded-lg px-5 py-3 active:scale-95 duration-150 hover:bg-black/5"
            >
              <p className="text-gray-600 text-start pointer-events-none">
                {choose}
              </p>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
