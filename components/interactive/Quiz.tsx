
import React, { useState } from 'react';
import type { QuizInteractive, QuizQuestion } from '../../types';

interface QuizProps {
  config: QuizInteractive;
}

export const Quiz: React.FC<QuizProps> = ({ config }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = config.questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === question.correctAnswerIndex;

  const handleAnswerSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);
    if (index === question.correctAnswerIndex) {
      setCorrectCount(correctCount + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    if (currentQuestionIndex < config.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setCorrectCount(0);
      setIsFinished(false);
  }

  if (isFinished) {
      return (
          <div className="text-center p-4">
              <h4 className="text-xl font-bold text-white mb-2">Quiz Complete!</h4>
              <p className="text-slate-300 text-lg">You scored {correctCount} out of {config.questions.length}.</p>
              <button
                onClick={handleRestart}
                className="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-500 transition"
              >
                  Restart Quiz
              </button>
          </div>
      )
  }

  return (
    <div className="space-y-4">
      <p className="font-semibold text-lg text-slate-300">{currentQuestionIndex + 1}. {question.question}</p>
      <div className="space-y-2">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectAnswer = index === question.correctAnswerIndex;
          let buttonClass = 'text-left w-full p-3 rounded-md transition-colors duration-200 border ';
          if (showFeedback) {
            if (isCorrectAnswer) {
              buttonClass += 'bg-green-500/20 border-green-500 text-white';
            } else if (isSelected && !isCorrectAnswer) {
              buttonClass += 'bg-red-500/20 border-red-500 text-white';
            } else {
              buttonClass += 'bg-slate-800 border-slate-700 text-slate-400';
            }
          } else {
            buttonClass += `bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300 ${isSelected ? 'ring-2 ring-indigo-500' : ''}`;
          }
          return (
            <button key={index} onClick={() => handleAnswerSelect(index)} className={buttonClass} disabled={showFeedback}>
              {option}
            </button>
          );
        })}
      </div>
      {showFeedback && (
        <div className={`p-4 rounded-md mt-4 ${isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
          <h4 className={`font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {isCorrect ? 'Correct!' : 'Not quite.'}
          </h4>
          <p className="text-slate-300 mt-1">{question.explanation}</p>
          <button onClick={handleNext} className="mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-500 transition">
            {currentQuestionIndex < config.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </div>
      )}
    </div>
  );
};
