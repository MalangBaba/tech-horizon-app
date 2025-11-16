
import React, { useState } from 'react';
import type { SorterInteractive, SorterItem } from '../../types';

interface SorterProps {
  config: SorterInteractive;
}

export const Sorter: React.FC<SorterProps> = ({ config }) => {
  const [items, setItems] = useState<SorterItem[]>(config.items);
  const [selectedItem, setSelectedItem] = useState<SorterItem | null>(null);
  const [feedback, setFeedback] = useState<{[itemId: string]: boolean}>({});

  const unassignedItems = items.filter(item => !feedback[item.id]);

  const handleSelect = (item: SorterItem) => {
    setSelectedItem(item);
  }

  const handleAssign = (categoryId: string) => {
    if (!selectedItem) return;

    const isCorrect = selectedItem.category === categoryId;
    setFeedback(prev => ({...prev, [selectedItem.id]: isCorrect }));
    setSelectedItem(null);
  };
  
  const getItemsForCategory = (categoryId: string) => {
    return items.filter(item => feedback[item.id] && item.category === categoryId);
  }

  const handleReset = () => {
      setFeedback({});
      setSelectedItem(null);
  }

  const allCorrect = items.length > 0 && unassignedItems.length === 0 && Object.values(feedback).every(v => v);


  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-slate-300 mb-2">Unassigned Items:</h4>
        <div className="flex flex-wrap gap-2">
            {unassignedItems.map(item => (
                <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className={`px-3 py-1.5 rounded-md text-sm transition ${selectedItem?.id === item.id ? 'bg-indigo-600 text-white ring-2 ring-indigo-400' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'}`}
                >
                    {item.text}
                </button>
            ))}
            {unassignedItems.length === 0 && !allCorrect && <p className="text-slate-500 text-sm">All items assigned. Reset to try again.</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {config.categories.map(category => (
            <div key={category.id} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 min-h-[150px]">
                <h5 className="font-bold text-center text-indigo-400 mb-3">{category.title}</h5>
                <button 
                  onClick={() => handleAssign(category.id)}
                  disabled={!selectedItem}
                  className="w-full text-center py-3 border-2 border-dashed border-slate-600 rounded-md text-slate-500 hover:bg-slate-700 hover:border-slate-500 transition disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:opacity-50"
                >
                  {selectedItem ? `Place "${selectedItem.text}" here` : 'Select an item above'}
                </button>
                <div className="mt-3 space-y-2">
                    {getItemsForCategory(category.id).map(item => (
                        <div key={item.id} className="bg-green-500/20 border border-green-500/30 text-green-300 px-3 py-1.5 rounded-md text-sm text-center">
                            {item.text}
                        </div>
                    ))}
                     {Object.entries(feedback).map(([itemId, isCorrect]) => {
                         const item = items.find(i => i.id === itemId);
                         if (item && !isCorrect && item.category !== category.id && selectedItem?.id !== itemId) {
                              const assignedToWrongCategory = Object.entries(feedback).find(([id, correct])=> id === item.id && !correct);
                              if (assignedToWrongCategory) {
                                  // This logic is tricky. Let's simplify and just show correct ones.
                              }
                         }
                         return null;
                     })}
                </div>
            </div>
        ))}
      </div>

       {allCorrect && (
           <div className="p-4 text-center bg-green-500/10 rounded-lg">
                <p className="font-bold text-green-400">Excellent! You've categorized all items correctly.</p>
           </div>
       )}

      <div className="text-center mt-4">
          <button onClick={handleReset} className="px-5 py-2 text-sm bg-slate-600 text-white font-semibold rounded-md hover:bg-slate-500 transition">
              Reset
          </button>
      </div>

    </div>
  );
};
