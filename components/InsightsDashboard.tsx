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
