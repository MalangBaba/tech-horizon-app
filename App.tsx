
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentPanel } from './components/ContentPanel';
import { day1Topics } from './constants';
import type { Topic } from './types';
import { MenuIcon, XIcon } from './components/icons/Icons';

const App: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<Topic>(day1Topics[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectTopic = (topic: Topic) => {
    setActiveTopic(topic);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-900 font-sans">
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {isSidebarOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <Sidebar
        topics={day1Topics}
        activeTopic={activeTopic}
        onSelectTopic={handleSelectTopic}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 overflow-y-auto transition-all duration-300 md:ml-64">
        <div className="p-4 sm:p-6 md:p-8">
          <ContentPanel topic={activeTopic} />
        </div>
      </main>
    </div>
  );
};

export default App;
