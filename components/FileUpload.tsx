'use client';

import { useState, useCallback } from 'react';

interface FileUploadProps {
  onFileLoaded: (data: any) => void;
}

export default function FileUpload({ onFileLoaded }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFile = useCallback((file: File) => {
    setError(null);
    setLoading(true);

    if (!file.name.endsWith('.json')) {
      setError('Please upload a JSON file');
      setLoading(false);
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);
        onFileLoaded(data);
        setLoading(false);
      } catch (err) {
        setError('Invalid JSON file. Please check your Claude data export.');
        setLoading(false);
      }
    };

    reader.onerror = () => {
      setError('Error reading file');
      setLoading(false);
    };

    reader.readAsText(file);
  }, [onFileLoaded]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  }, [handleFile]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          border-2 border-dashed rounded-lg p-12 text-center cursor-pointer
          transition-all duration-200
          ${isDragging
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
            : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
          }
        `}
      >
        <input
          type="file"
          accept=".json"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="space-y-4">
            <div className="text-6xl">📊</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Upload Your Claude Data Export
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Drag and drop your JSON file here, or click to browse
              </p>
            </div>
            {loading && (
              <div className="text-blue-600 dark:text-blue-400">
                Processing file...
              </div>
            )}
            {error && (
              <div className="text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950 p-3 rounded">
                {error}
              </div>
            )}
          </div>
        </label>
      </div>
      <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        <p className="font-semibold mb-2">Privacy Notice:</p>
        <p>
          Your data is processed entirely in your browser. Nothing is uploaded to any server.
          All analysis happens locally on your device.
        </p>
      </div>
    </div>
  );
}
