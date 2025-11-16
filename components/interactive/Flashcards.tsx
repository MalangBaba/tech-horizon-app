
import React, { useState } from 'react';
import type { FlashcardInteractive } from '../../types';

interface FlashcardsProps {
  config: FlashcardInteractive;
}

export const Flashcards: React.FC<FlashcardsProps> = ({ config }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const card = config.cards[currentIndex];

  const goToNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % config.cards.length);
  };

  const goToPrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + config.cards.length) % config.cards.length);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-lg h-64 [perspective:1000px]">
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full bg-slate-800 rounded-lg p-6 flex items-center justify-center text-center cursor-pointer border border-slate-700 [backface-visibility:hidden]">
            <h4 className="text-2xl font-bold text-white">{card.term}</h4>
          </div>
          {/* Back of card */}
          <div className="absolute w-full h-full bg-indigo-900/50 rounded-lg p-6 flex items-center justify-center text-center cursor-pointer border border-indigo-700 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <p className="text-slate-300 leading-relaxed">{card.definition}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between w-full max-w-lg">
        <button onClick={goToPrev} className="px-4 py-2 bg-slate-700 text-white font-semibold rounded-md hover:bg-slate-600 transition">
          Prev
        </button>
        <p className="text-slate-400 font-medium">
          {currentIndex + 1} / {config.cards.length}
        </p>
        <button onClick={goToNext} className="px-4 py-2 bg-slate-700 text-white font-semibold rounded-md hover:bg-slate-600 transition">
          Next
        </button>
      </div>
    </div>
  );
};
