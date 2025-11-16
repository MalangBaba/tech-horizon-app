
import React from 'react';
import type { Topic } from '../types';
import { InteractiveSection } from './InteractiveSection';
import { SparklesIcon } from './icons/Icons';

interface ContentPanelProps {
  topic: Topic;
}

export const ContentPanel: React.FC<ContentPanelProps> = ({ topic }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="border-b border-slate-700 pb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{topic.title}</h2>
      </header>
      
      <section className="bg-slate-800/50 p-6 rounded-lg shadow-lg">
        <p className="text-slate-300 leading-relaxed text-lg">
          {topic.summary}
        </p>
      </section>

      <section className="bg-gradient-to-br from-slate-800 to-slate-800/80 p-6 rounded-lg border border-slate-700 shadow-xl">
        <h3 className="text-2xl font-bold text-indigo-400 flex items-center gap-3 mb-4">
          <SparklesIcon className="h-7 w-7" />
          {topic.interactive.title}
        </h3>
        <p className="text-slate-400 mb-6">{topic.interactive.description}</p>
        <InteractiveSection interactiveConfig={topic.interactive} />
      </section>
    </div>
  );
};
