import { ClaudeDataExport, ClaudeConversation, ClaudeMessage, InsightsData } from '@/types/claude';

export function analyzeClaudeData(data: ClaudeDataExport): InsightsData {
  const conversations = data.conversations || [];

  // Total conversations
  const totalConversations = conversations.length;

  // Total messages
  let totalMessages = 0;
  let userMessages = 0;
  let assistantMessages = 0;

  conversations.forEach(conv => {
    const messages = conv.chat_messages || [];
    totalMessages += messages.length;
    messages.forEach(msg => {
      if (msg.sender === 'human') userMessages++;
      else assistantMessages++;
    });
  });

  // Average messages per conversation
  const avgMessagesPerConversation = totalConversations > 0
    ? Math.round((totalMessages / totalConversations) * 10) / 10
    : 0;

  // Longest conversation
  let longestConversation = {
    name: 'N/A',
    messageCount: 0
  };

  conversations.forEach(conv => {
    const messageCount = (conv.chat_messages || []).length;
    if (messageCount > longestConversation.messageCount) {
      longestConversation = {
        name: conv.name || 'Untitled',
        messageCount
      };
    }
  });

  // Date range
  let earliestDate = new Date();
  let latestDate = new Date(0);

  conversations.forEach(conv => {
    const convDate = new Date(conv.created_at);
    if (convDate < earliestDate) earliestDate = convDate;
    if (convDate > latestDate) latestDate = convDate;
  });

  // Usage by day
  const dayMap = new Map<string, number>();
  conversations.forEach(conv => {
    (conv.chat_messages || []).forEach(msg => {
      const date = new Date(msg.created_at).toISOString().split('T')[0];
      dayMap.set(date, (dayMap.get(date) || 0) + 1);
    });
  });

  const usageByDay = Array.from(dayMap.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));

  // Usage by hour
  const hourMap = new Map<number, number>();
  for (let i = 0; i < 24; i++) {
    hourMap.set(i, 0);
  }

  conversations.forEach(conv => {
    (conv.chat_messages || []).forEach(msg => {
      const hour = new Date(msg.created_at).getHours();
      hourMap.set(hour, (hourMap.get(hour) || 0) + 1);
    });
  });

  const usageByHour = Array.from(hourMap.entries())
    .map(([hour, count]) => ({ hour, count }))
    .sort((a, b) => a.hour - b.hour);

  // Conversation length distribution
  const lengthBuckets = {
    '1-5': 0,
    '6-10': 0,
    '11-20': 0,
    '21-50': 0,
    '51+': 0
  };

  conversations.forEach(conv => {
    const msgCount = (conv.chat_messages || []).length;
    if (msgCount <= 5) lengthBuckets['1-5']++;
    else if (msgCount <= 10) lengthBuckets['6-10']++;
    else if (msgCount <= 20) lengthBuckets['11-20']++;
    else if (msgCount <= 50) lengthBuckets['21-50']++;
    else lengthBuckets['51+']++;
  });

  const conversationLengthDistribution = Object.entries(lengthBuckets)
    .map(([range, count]) => ({ range, count }));

  // Top conversations by message count
  const topConversations = conversations
    .map(conv => ({
      name: conv.name || 'Untitled',
      messageCount: (conv.chat_messages || []).length,
      created: conv.created_at
    }))
    .sort((a, b) => b.messageCount - a.messageCount)
    .slice(0, 10);

  return {
    totalConversations,
    totalMessages,
    userMessages,
    assistantMessages,
    dateRange: {
      start: earliestDate.toISOString().split('T')[0],
      end: latestDate.toISOString().split('T')[0]
    },
    avgMessagesPerConversation,
    longestConversation,
    usageByDay,
    usageByHour,
    conversationLengthDistribution,
    topConversations
  };
}
