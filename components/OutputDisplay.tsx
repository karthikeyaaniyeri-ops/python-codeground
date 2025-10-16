
import React from 'react';
import { LoadingSpinner } from './icons';

interface OutputDisplayProps {
  output: string;
  isLoading: boolean;
  error: string;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ output, isLoading, error }) => {
  return (
    <div className="flex-1 p-4 bg-[#1e1e1e] text-gray-200 text-sm overflow-y-auto">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <LoadingSpinner />
          <span className="ml-2">Compiling and running...</span>
        </div>
      ) : error ? (
        <pre className="whitespace-pre-wrap text-red-400">{error}</pre>
      ) : (
        <pre className="whitespace-pre-wrap">{output || 'Output will be shown here.'}</pre>
      )}
    </div>
  );
};

export default OutputDisplay;
