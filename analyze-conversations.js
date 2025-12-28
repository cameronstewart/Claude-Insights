// Comprehensive analysis of conversations.json
const fs = require('fs');
const path = require('path');

console.log('Comprehensive Conversations Analysis');
console.log('='.repeat(80) + '\n');

const conversationsPath = path.join(__dirname, 'data', 'conversations.json');
const rawData = fs.readFileSync(conversationsPath, 'utf8');
const conversations = JSON.parse(rawData);

console.log(`Total Conversations: ${conversations.length.toLocaleString()}`);

// Collect comprehensive statistics
const stats = {
  totalConversations: conversations.length,
  totalMessages: 0,
  humanMessages: 0,
  assistantMessages: 0,
  conversationsWithFiles: 0,
  totalFiles: 0,
  conversationsByMonth: {},
  messagesByModel: {},
  topicCategories: {},
  conversationLengths: [],
  wordCounts: {
    total: 0,
    human: 0,
    assistant: 0
  },
  conversationsWithProjects: 0,
  projectsList: new Set(),
  uniqueUUIDs: new Set(),
  dateRange: {
    earliest: null,
    latest: null
  }
};

// Analyze each conversation
conversations.forEach(conv => {
  const messages = conv.chat_messages || [];
  const msgCount = messages.length;

  stats.totalMessages += msgCount;
  stats.conversationLengths.push(msgCount);
  stats.uniqueUUIDs.add(conv.uuid);

  // Date analysis
  const date = new Date(conv.created_at);
  if (!stats.dateRange.earliest || date < stats.dateRange.earliest) {
    stats.dateRange.earliest = date;
  }
  if (!stats.dateRange.latest || date > stats.dateRange.latest) {
    stats.dateRange.latest = date;
  }

  // Monthly distribution
  const monthKey = date.toISOString().substring(0, 7); // YYYY-MM
  stats.conversationsByMonth[monthKey] = (stats.conversationsByMonth[monthKey] || 0) + 1;

  // Project analysis
  if (conv.project_uuid) {
    stats.conversationsWithProjects++;
    stats.projectsList.add(conv.project_uuid);
  }

  // Message analysis
  messages.forEach(msg => {
    if (msg.sender === 'human') {
      stats.humanMessages++;
      if (msg.text) {
        const words = msg.text.split(/\s+/).length;
        stats.wordCounts.human += words;
        stats.wordCounts.total += words;
      }
    } else if (msg.sender === 'assistant') {
      stats.assistantMessages++;
      if (msg.text) {
        const words = msg.text.split(/\s+/).length;
        stats.wordCounts.assistant += words;
        stats.wordCounts.total += words;
      }

      // Track model usage
      const model = msg.model || 'unknown';
      stats.messagesByModel[model] = (stats.messagesByModel[model] || 0) + 1;
    }

    // File attachments
    if (msg.files && msg.files.length > 0) {
      if (!stats.conversationsWithFiles) stats.conversationsWithFiles = 0;
      stats.conversationsWithFiles++;
      stats.totalFiles += msg.files.length;
    }
  });
});

// Calculate averages and distributions
const avgMessagesPerConv = stats.totalMessages / stats.totalConversations;
const avgHumanWordsPerMsg = stats.wordCounts.human / stats.humanMessages;
const avgAssistantWordsPerMsg = stats.wordCounts.assistant / stats.assistantMessages;

// Sort conversations by length
const sortedByLength = conversations
  .map(c => ({
    name: c.name || 'Untitled',
    uuid: c.uuid,
    messages: (c.chat_messages || []).length,
    created: c.created_at
  }))
  .sort((a, b) => b.messages - a.messages);

// Get topic analysis from conversation names
const topicMap = new Map();
conversations.forEach(conv => {
  if (conv.name) {
    // Extract key terms (simple approach)
    const words = conv.name.toLowerCase().split(/\s+/);
    words.forEach(word => {
      if (word.length > 4) { // Only meaningful words
        topicMap.set(word, (topicMap.get(word) || 0) + 1);
      }
    });
  }
});

const topTopics = Array.from(topicMap.entries())
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20);

// Output analysis
console.log('\n' + '='.repeat(80));
console.log('MESSAGE STATISTICS');
console.log('='.repeat(80));
console.log(`Total Messages: ${stats.totalMessages.toLocaleString()}`);
console.log(`Human Messages: ${stats.humanMessages.toLocaleString()}`);
console.log(`Assistant Messages: ${stats.assistantMessages.toLocaleString()}`);
console.log(`Average Messages per Conversation: ${avgMessagesPerConv.toFixed(1)}`);
console.log(`\nWord Counts:`);
console.log(`  Total Words: ${stats.wordCounts.total.toLocaleString()}`);
console.log(`  Human Words: ${stats.wordCounts.human.toLocaleString()}`);
console.log(`  Assistant Words: ${stats.wordCounts.assistant.toLocaleString()}`);
console.log(`  Avg Human Words/Message: ${avgHumanWordsPerMsg.toFixed(1)}`);
console.log(`  Avg Assistant Words/Message: ${avgAssistantWordsPerMsg.toFixed(1)}`);

console.log('\n' + '='.repeat(80));
console.log('DATE RANGE & ACTIVITY');
console.log('='.repeat(80));
console.log(`First Conversation: ${stats.dateRange.earliest?.toISOString().split('T')[0]}`);
console.log(`Latest Conversation: ${stats.dateRange.latest?.toISOString().split('T')[0]}`);
console.log(`Time Span: ${Math.floor((stats.dateRange.latest - stats.dateRange.earliest) / (1000 * 60 * 60 * 24))} days`);

console.log('\n' + '='.repeat(80));
console.log('MODEL USAGE');
console.log('='.repeat(80));
const sortedModels = Object.entries(stats.messagesByModel)
  .sort((a, b) => b[1] - a[1]);
sortedModels.forEach(([model, count]) => {
  console.log(`${model}: ${count.toLocaleString()} messages`);
});

console.log('\n' + '='.repeat(80));
console.log('PROJECT ASSOCIATION');
console.log('='.repeat(80));
console.log(`Conversations with Projects: ${stats.conversationsWithProjects.toLocaleString()}`);
console.log(`Unique Projects: ${stats.projectsList.size}`);
console.log(`Conversations without Projects: ${(stats.totalConversations - stats.conversationsWithProjects).toLocaleString()}`);

console.log('\n' + '='.repeat(80));
console.log('FILE ATTACHMENTS');
console.log('='.repeat(80));
console.log(`Conversations with Files: ${stats.conversationsWithFiles}`);
console.log(`Total Files Attached: ${stats.totalFiles}`);

console.log('\n' + '='.repeat(80));
console.log('TOP 20 LONGEST CONVERSATIONS');
console.log('='.repeat(80));
sortedByLength.slice(0, 20).forEach((conv, i) => {
  console.log(`${(i + 1).toString().padStart(2)}. ${conv.name.substring(0, 60).padEnd(60)} ${conv.messages.toString().padStart(4)} msgs`);
});

console.log('\n' + '='.repeat(80));
console.log('TOP 20 TOPICS (by keyword frequency in titles)');
console.log('='.repeat(80));
topTopics.forEach(([topic, count], i) => {
  console.log(`${(i + 1).toString().padStart(2)}. ${topic.padEnd(30)} ${count.toString().padStart(4)} conversations`);
});

console.log('\n' + '='.repeat(80));
console.log('MONTHLY ACTIVITY');
console.log('='.repeat(80));
const sortedMonths = Object.entries(stats.conversationsByMonth)
  .sort((a, b) => a[0].localeCompare(b[0]));
sortedMonths.forEach(([month, count]) => {
  const bar = '█'.repeat(Math.ceil(count / 10));
  console.log(`${month}: ${count.toString().padStart(4)} ${bar}`);
});

console.log('\n' + '='.repeat(80));
console.log('CONVERSATION LENGTH DISTRIBUTION');
console.log('='.repeat(80));
const lengthBuckets = {
  '1 message': 0,
  '2-5 messages': 0,
  '6-10 messages': 0,
  '11-20 messages': 0,
  '21-50 messages': 0,
  '51-100 messages': 0,
  '100+ messages': 0
};
stats.conversationLengths.forEach(len => {
  if (len === 1) lengthBuckets['1 message']++;
  else if (len <= 5) lengthBuckets['2-5 messages']++;
  else if (len <= 10) lengthBuckets['6-10 messages']++;
  else if (len <= 20) lengthBuckets['11-20 messages']++;
  else if (len <= 50) lengthBuckets['21-50 messages']++;
  else if (len <= 100) lengthBuckets['51-100 messages']++;
  else lengthBuckets['100+ messages']++;
});
Object.entries(lengthBuckets).forEach(([bucket, count]) => {
  const percentage = ((count / stats.totalConversations) * 100).toFixed(1);
  const bar = '█'.repeat(Math.ceil(count / 20));
  console.log(`${bucket.padEnd(20)}: ${count.toString().padStart(4)} (${percentage.toString().padStart(5)}%) ${bar}`);
});

// Save detailed analysis to file
const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    totalConversations: stats.totalConversations,
    totalMessages: stats.totalMessages,
    humanMessages: stats.humanMessages,
    assistantMessages: stats.assistantMessages,
    averageMessagesPerConversation: avgMessagesPerConv,
    wordCounts: stats.wordCounts,
    dateRange: {
      earliest: stats.dateRange.earliest?.toISOString(),
      latest: stats.dateRange.latest?.toISOString(),
      spanDays: Math.floor((stats.dateRange.latest - stats.dateRange.earliest) / (1000 * 60 * 60 * 24))
    }
  },
  modelUsage: stats.messagesByModel,
  projectAssociation: {
    conversationsWithProjects: stats.conversationsWithProjects,
    uniqueProjects: stats.projectsList.size,
    conversationsWithoutProjects: stats.totalConversations - stats.conversationsWithProjects
  },
  fileAttachments: {
    conversationsWithFiles: stats.conversationsWithFiles,
    totalFiles: stats.totalFiles
  },
  topConversations: sortedByLength.slice(0, 50),
  topTopics: topTopics,
  monthlyActivity: stats.conversationsByMonth,
  lengthDistribution: lengthBuckets
};

fs.writeFileSync(
  path.join(__dirname, 'data', 'conversations-analysis.json'),
  JSON.stringify(report, null, 2)
);

console.log('\n' + '='.repeat(80));
console.log('Analysis complete! Detailed JSON saved to data/conversations-analysis.json');
console.log('='.repeat(80) + '\n');
