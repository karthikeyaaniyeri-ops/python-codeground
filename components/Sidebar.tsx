
import React, { useState } from 'react';
import { PYTHON_PROGRAMS } from '../constants';
import { CopyIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from './icons';
import type { CodeSnippet } from '../types';

interface SidebarProps {
  onSelectCode: (codeSnippet: CodeSnippet) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectCode }) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleCopy = (code: string, id: number) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <aside className="w-80 bg-gray-800 flex flex-col h-full border-r border-gray-700 shadow-md">
      <div 
        className="flex justify-between items-center p-4 bg-gray-700 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-xl font-bold text-white">Code Samples</h1>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      {isOpen && (
        <div className="flex-1 overflow-y-auto">
          <ul className="p-2">
            {PYTHON_PROGRAMS.map((program) => (
              <li
                key={program.id}
                className="mb-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  <span
                    className="flex-1 cursor-pointer truncate text-gray-300"
                    onClick={() => onSelectCode(program)}
                  >
                    {program.id}. {program.title}
                  </span>
                  <button
                    onClick={() => handleCopy(program.code, program.id)}
                    className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white"
                    aria-label="Copy code"
                  >
                    {copiedId === program.id ? <CheckIcon /> : <CopyIcon />}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
