'use client';

import { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import InsightsDashboard from '@/components/InsightsDashboard';
import { analyzeClaudeData } from '@/lib/analytics';
import { exportAsHTML } from '@/lib/export';
import { ClaudeDataExport, InsightsData } from '@/types/claude';

export default function Home() {
  const [insights, setInsights] = useState<InsightsData | null>(null);

  const handleFileLoaded = (data: ClaudeDataExport) => {
    try {
      const analyzed = analyzeClaudeData(data);
      setInsights(analyzed);
    } catch (error) {
      console.error('Error analyzing data:', error);
      alert('Error analyzing your data. Please make sure you uploaded a valid Claude data export.');
    }
  };

  const handleReset = () => {
    setInsights(null);
  };

  const handleExport = () => {
    if (insights) {
      exportAsHTML(insights);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {!insights ? (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Claude Insights</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                Analyze your Claude conversation data and gain insights
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Privacy-first • Client-side processing • No data uploaded
              </p>
            </div>
            <FileUpload onFileLoaded={handleFileLoaded} />
            <div className="max-w-2xl mx-auto bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-900">
              <h3 className="font-semibold mb-3">How to get your Claude data:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Go to <a href="https://claude.ai" className="text-blue-600 dark:text-blue-400 underline" target="_blank" rel="noopener noreferrer">claude.ai</a></li>
                <li>Click on your profile icon in the bottom left</li>
                <li>Select "Settings"</li>
                <li>Go to "Data & Privacy"</li>
                <li>Click "Export data"</li>
                <li>Wait for the export email (usually arrives within minutes)</li>
                <li>Download the JSON file and upload it here</li>
              </ol>
            </div>
          </div>
        ) : (
          <InsightsDashboard
            insights={insights}
            onReset={handleReset}
            onExport={handleExport}
          />
        )}
      </div>
    </main>
  );
}
