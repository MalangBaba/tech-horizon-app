
import React from 'react';
import type { ReflectionInteractive } from '../../types';

interface ReflectionProps {
  config: ReflectionInteractive;
}

export const Reflection: React.FC<ReflectionProps> = ({ config }) => {
  return (
    <div className="space-y-6">
      {config.prompts.map((prompt, index) => (
        <div key={index}>
          <label htmlFor={`reflection-${index}`} className="block font-semibold text-slate-300 mb-2">
            {prompt}
          </label>
          <textarea
            id={`reflection-${index}`}
            rows={4}
            placeholder="Type your thoughts here..."
            className="w-full bg-slate-900/50 border border-slate-600 rounded-md p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>
      ))}
       <p className="text-sm text-slate-500 text-center italic mt-4">Note: Your reflections are for your use only and are not saved.</p>
    </div>
  );
};
