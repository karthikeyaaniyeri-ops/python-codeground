
import React from 'react';

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode }) => {
  return (
    <div className="h-full w-full bg-[#1e1e1e]">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-full p-4 bg-[#1e1e1e] text-gray-200 font-mono text-sm resize-none border-none outline-none leading-relaxed"
        placeholder="Write your Python code here..."
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;
