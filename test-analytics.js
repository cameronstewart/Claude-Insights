// Test script to show what the insights output looks like
const fs = require('fs');

// Mock the analytics function
function analyzeClaudeData(data) {
  const conversations = data.conversations || [];

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

  const avgMessagesPerConversation = conversations.length > 0
    ? Math.round((totalMessages / conversations.length) * 10) / 10
    : 0;

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

  let earliestDate = new Date();
  let latestDate = new Date(0);

  conversations.forEach(conv => {
    const convDate = new Date(conv.created_at);
    if (convDate < earliestDate) earliestDate = convDate;
    if (convDate > latestDate) latestDate = convDate;
  });

  const dayMap = new Map();
  conversations.forEach(conv => {
    (conv.chat_messages || []).forEach(msg => {
      const date = new Date(msg.created_at).toISOString().split('T')[0];
      dayMap.set(date, (dayMap.get(date) || 0) + 1);
    });
  });

  const usageByDay = Array.from(dayMap.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));

  const hourMap = new Map();
  for (let i = 0; i < 24; i++) {
    hourMap.set(i, 0);
  }

  conversations.forEach(conv => {
    (conv.chat_messages || []).forEach(msg => {
      const hour = new Date(msg.created_at).getHours();
      hourMap.set(hour, (hourMap.get(hour) || 0) + 1);
    });
  });

  const topConversations = conversations
    .map(conv => ({
      name: conv.name || 'Untitled',
      messageCount: (conv.chat_messages || []).length,
      created: conv.created_at
    }))
    .sort((a, b) => b.messageCount - a.messageCount)
    .slice(0, 10);

  return {
    totalConversations: conversations.length,
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
    topConversations
  };
}

// Load and analyze mock data
const data = JSON.parse(fs.readFileSync('mock-claude-data.json', 'utf8'));
const insights = analyzeClaudeData(data);

// Pretty print the results
console.log('\n=== CLAUDE INSIGHTS - MOCK OUTPUT ===\n');
console.log('📊 KEY METRICS:');
console.log('  Total Conversations:', insights.totalConversations);
console.log('  Total Messages:', insights.totalMessages);
console.log('  Your Messages:', insights.userMessages);
console.log('  Claude\'s Messages:', insights.assistantMessages);
console.log('');
console.log('📅 DATE RANGE:');
console.log('  From:', insights.dateRange.start);
console.log('  To:', insights.dateRange.end);
console.log('');
console.log('📈 STATISTICS:');
console.log('  Avg Messages/Conversation:', insights.avgMessagesPerConversation);
console.log('  Longest Conversation:', insights.longestConversation.name);
console.log('  Messages in longest:', insights.longestConversation.messageCount);
console.log('');
console.log('📊 USAGE BY DAY:');
insights.usageByDay.forEach(day => {
  console.log(`  ${day.date}: ${day.count} messages`);
});
console.log('');
console.log('🏆 TOP CONVERSATIONS:');
insights.topConversations.forEach((conv, i) => {
  console.log(`  ${i + 1}. ${conv.name} - ${conv.messageCount} messages`);
});
console.log('\n=====================================\n');
