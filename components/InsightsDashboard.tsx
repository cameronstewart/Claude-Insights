'use client';

import { InsightsData } from '@/types/claude';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface InsightsDashboardProps {
  insights: InsightsData;
  onReset: () => void;
  onExport: () => void;
}

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

export default function InsightsDashboard({ insights, onReset, onExport }: InsightsDashboardProps) {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your Claude Insights</h1>
        <div className="flex gap-3">
          <button
            onClick={onExport}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Export Report
          </button>
          <button
            onClick={onReset}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Upload New File
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Conversations"
          value={insights.totalConversations}
          icon="💬"
        />
        <MetricCard
          title="Total Messages"
          value={insights.totalMessages}
          icon="✉️"
        />
        <MetricCard
          title="Your Messages"
          value={insights.userMessages}
          icon="👤"
        />
        <MetricCard
          title="Claude's Messages"
          value={insights.assistantMessages}
          icon="🤖"
        />
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Date Range
          </h3>
          <p className="text-lg">
            {insights.dateRange.start} to {insights.dateRange.end}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Avg Messages per Conversation
          </h3>
          <p className="text-2xl font-bold">{insights.avgMessagesPerConversation}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Longest Conversation
          </h3>
          <p className="text-lg font-semibold">{insights.longestConversation.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {insights.longestConversation.messageCount} messages
          </p>
        </div>
      </div>

      {/* Prompting Style Analysis */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">📝 Your Prompting Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg Prompt Length</p>
            <p className="text-2xl font-bold">{insights.promptingStyle.avgPromptLength} chars</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg Words</p>
            <p className="text-2xl font-bold">{insights.promptingStyle.avgWordsPerPrompt}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Questions Asked</p>
            <p className="text-2xl font-bold">{insights.promptingStyle.questionPercentage}%</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">Questions</p>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{insights.promptingStyle.styleBreakdown.questions}</p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
            <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">Commands</p>
            <p className="text-xl font-bold text-purple-600 dark:text-purple-400">{insights.promptingStyle.styleBreakdown.commands}</p>
          </div>
          <div className="p-4 bg-pink-50 dark:bg-pink-950 rounded-lg">
            <p className="text-sm font-semibold text-pink-900 dark:text-pink-100">Descriptions</p>
            <p className="text-xl font-bold text-pink-600 dark:text-pink-400">{insights.promptingStyle.styleBreakdown.descriptions}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Politeness Score</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${insights.promptingStyle.politenessScore}%` }}
                />
              </div>
              <span className="text-sm font-bold">{insights.promptingStyle.politenessScore}%</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Code Blocks Used</p>
            <p className="text-xl font-bold">{insights.promptingStyle.codeBlockCount}</p>
          </div>
        </div>
      </div>

      {/* Best Practices Evaluation */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">⭐ Best Practices Score</h2>
        <div className="text-center mb-6">
          <div className="inline-block">
            <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">
              {insights.bestPractices.overallScore}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Overall Score</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <ScoreCard label="Clarity" score={insights.bestPractices.scores.clarity} />
          <ScoreCard label="Specificity" score={insights.bestPractices.scores.specificity} />
          <ScoreCard label="Context" score={insights.bestPractices.scores.context} />
          <ScoreCard label="Formatting" score={insights.bestPractices.scores.formatting} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">✓ Strengths</h3>
            <ul className="space-y-1">
              {insights.bestPractices.strengths.map((strength, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300">• {strength}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">→ Areas to Improve</h3>
            <ul className="space-y-1">
              {insights.bestPractices.improvements.map((improvement, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300">• {improvement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Theme Extraction */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">🎯 Your Main Topics</h2>
        <div className="space-y-3">
          {insights.themes.slice(0, 8).map((theme, i) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{theme.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {theme.count} mentions ({theme.percentage}%)
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${theme.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps & Ideas */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">💡 Ideas & Next Steps</h2>

        {insights.nextSteps.incompleteConversations.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">
              Conversations to Continue
            </h3>
            <div className="space-y-3">
              {insights.nextSteps.incompleteConversations.map((conv, i) => (
                <div key={i} className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <p className="font-medium mb-1">{conv.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 italic">
                    &ldquo;{conv.lastMessage}&rdquo;
                  </p>
                  <div className="text-xs">
                    <span className="font-semibold">Suggestions: </span>
                    {conv.suggestions.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {insights.nextSteps.followUpIdeas.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Follow-up Ideas
            </h3>
            <ul className="space-y-2">
              {insights.nextSteps.followUpIdeas.map((idea, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">→</span>
                  <span className="text-sm">{idea}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {insights.nextSteps.commonPatterns.length > 0 && (
          <div>
            <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">
              Patterns Observed
            </h3>
            <ul className="space-y-2">
              {insights.nextSteps.commonPatterns.map((pattern, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">◆</span>
                  <span className="text-sm">{pattern}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Usage Over Time */}
        <ChartCard title="Usage Over Time">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={insights.usageByDay}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis />
              <Tooltip
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#3b82f6"
                name="Messages"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Usage by Hour */}
        <ChartCard title="Usage by Hour of Day">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={insights.usageByHour}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="hour"
                tickFormatter={(hour) => `${hour}:00`}
              />
              <YAxis />
              <Tooltip
                labelFormatter={(hour) => `${hour}:00`}
              />
              <Legend />
              <Bar dataKey="count" fill="#8b5cf6" name="Messages" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Conversation Length Distribution */}
        <ChartCard title="Conversation Length Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={insights.conversationLengthDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#ec4899" name="Conversations" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Top Conversations */}
        <ChartCard title="Top 10 Conversations by Messages">
          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            {insights.topConversations.map((conv, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{conv.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {new Date(conv.created).toLocaleDateString()}
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {conv.messageCount}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">messages</p>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon }: { title: string; value: number; icon: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold">{value.toLocaleString()}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

function ScoreCard({ label, score }: { label: string; score: number }) {
  const getColor = (score: number) => {
    if (score >= 70) return 'bg-green-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <div className="text-center">
      <div className="relative w-16 h-16 mx-auto mb-2">
        <svg className="transform -rotate-90 w-16 h-16">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200 dark:text-gray-700"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${2 * Math.PI * 28 * (1 - score / 100)}`}
            className={getColor(score)}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold">{score}</span>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
}
