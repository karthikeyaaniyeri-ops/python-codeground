
import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import CodeEditor from './components/CodeEditor';
import OutputDisplay from './components/OutputDisplay';
import { runPythonCode } from './services/geminiService';
import { PlayIcon } from './components/icons';
import type { CodeSnippet } from './types';


const App: React.FC = () => {
  const [code, setCode] = useState<string>('# Select a program from the left or write your own Python code here!');
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSelectCode = useCallback((selectedCode: CodeSnippet) => {
    setCode(selectedCode.code);
    setOutput('');
    setError('');
  }, []);

  const handleRunCode = useCallback(async () => {
    if (!code.trim()) {
      setError("Cannot run empty code.");
      return;
    }
    setIsLoading(true);
    setOutput('');
    setError('');
    try {
      const result = await runPythonCode(code);
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? `Error: ${err.message}` : 'An unknown error occurred.');
      setOutput('');
    } finally {
      setIsLoading(false);
    }
  }, [code]);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200 font-mono">
      <Sidebar onSelectCode={handleSelectCode} />
      <main className="flex-1 flex flex-col p-4 gap-4 overflow-hidden">
        <div className="flex-1 flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-between items-center p-3 bg-gray-700 border-b border-gray-600">
            <h2 className="text-lg font-semibold text-gray-100">Python Editor</h2>
            <button
              onClick={handleRunCode}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:cursor-not-allowed text-white font-bold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <PlayIcon />
              {isLoading ? 'Running...' : 'Run'}
            </button>
          </div>
          <CodeEditor code={code} setCode={setCode} />
        </div>
        <div className="flex-1 flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-y-auto">
          <div className="p-3 bg-gray-700 border-b border-gray-600">
            <h2 className="text-lg font-semibold text-gray-100">Output</h2>
          </div>
          <OutputDisplay output={output} isLoading={isLoading} error={error} />
        </div>
      </main>
    </div>
  );
};

export default App;
