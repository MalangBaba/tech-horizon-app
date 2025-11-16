
import React from 'react';
import type { InteractiveContent } from '../types';
import { Quiz } from './interactive/Quiz';
import { Flashcards } from './interactive/Flashcards';
import { Sorter } from './interactive/Sorter';
import { Reflection } from './interactive/Reflection';

interface InteractiveSectionProps {
  interactiveConfig: InteractiveContent;
}

export const InteractiveSection: React.FC<InteractiveSectionProps> = ({ interactiveConfig }) => {
  const renderInteractiveElement = () => {
    switch (interactiveConfig.type) {
      case 'quiz':
        return <Quiz config={interactiveConfig} />;
      case 'flashcards':
        return <Flashcards config={interactiveConfig} />;
      case 'sorter':
        return <Sorter config={interactiveConfig} />;
      case 'reflection':
        return <Reflection config={interactiveConfig} />;
      default:
        return <div className="text-slate-500">Interactive module not recognized.</div>;
    }
  };

  return (
    <div className="mt-6 min-h-[100px] bg-slate-900/50 rounded-lg p-4 border border-slate-700">
      {renderInteractiveElement()}
    </div>
  );
};
