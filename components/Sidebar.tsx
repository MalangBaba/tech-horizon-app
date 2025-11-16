
import React from 'react';
import type { Topic } from '../types';
import { BookOpenIcon, ChevronRightIcon } from './icons/Icons';

interface SidebarProps {
  topics: Topic[];
  activeTopic: Topic;
  onSelectTopic: (topic: Topic) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ topics, activeTopic, onSelectTopic, isOpen, setIsOpen }) => {
  const sidebarClasses = `
    fixed top-0 left-0 h-full bg-slate-800/95 backdrop-blur-sm z-20
    w-64 transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0
  `;

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/60 z-10 md:hidden" onClick={() => setIsOpen(false)}></div>}
      <aside className={sidebarClasses}>
        <div className="p-4 border-b border-slate-700">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <BookOpenIcon className="h-6 w-6 text-indigo-400" />
            Tech Horizon
          </h1>
          <p className="text-sm text-slate-400 mt-1">Day 1: The Core Concepts</p>
        </div>
        <nav className="p-2">
          <ul>
            {topics.map((topic, index) => (
              <li key={topic.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTopic(topic);
                  }}
                  className={`
                    flex items-center justify-between p-3 my-1 rounded-md text-sm font-medium
                    transition-colors duration-200
                    ${activeTopic.id === topic.id
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }
                  `}
                >
                  <span className="flex items-center">
                    <span className="bg-slate-700/50 rounded-md w-6 h-6 flex items-center justify-center mr-3 text-xs">
                      {index + 1}
                    </span>
                    {topic.title}
                  </span>
                  {activeTopic.id === topic.id && <ChevronRightIcon className="h-5 w-5" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
