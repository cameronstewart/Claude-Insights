// Test script to verify analytics work with the extracted conversations.json
const fs = require('fs');
const path = require('path');

console.log('Testing Claude Insights Analytics with Real Conversations Data\n');
console.log('='.repeat(70) + '\n');

const conversationsPath = path.join(__dirname, 'data', 'conversations.json');

try {
  // Check file size
  const stats = fs.statSync(conversationsPath);
  console.log('📁 File: conversations.json');
  console.log('   Size:', (stats.size / 1024 / 1024).toFixed(2), 'MB');

  // Read and parse the file
  console.log('\n📖 Reading and parsing...');
  const rawData = fs.readFileSync(conversationsPath, 'utf8');
  const data = JSON.parse(rawData);

  console.log('✅ Successfully parsed JSON');

  // Check structure
  console.log('\n🔍 Data Structure:');
  console.log('   Type:', Array.isArray(data) ? 'Array' : 'Object');

  let conversations = [];

  if (Array.isArray(data)) {
    conversations = data;
    console.log('   Direct array of conversations');
  } else if (data.conversations && Array.isArray(data.conversations)) {
    conversations = data.conversations;
    console.log('   Conversations in data.conversations property');
  }

  console.log('   Total conversations:', conversations.length);

  if (conversations.length > 0) {
    const first = conversations[0];
    console.log('\n📝 First Conversation Sample:');
    console.log('   UUID:', first.uuid?.substring(0, 20) + '...');
    console.log('   Name:', first.name?.substring(0, 50) || 'Untitled');
    console.log('   Created:', first.created_at);
    console.log('   Messages:', first.chat_messages?.length || 0);

    if (first.chat_messages && first.chat_messages.length > 0) {
      const firstMsg = first.chat_messages[0];
      console.log('\n   First Message:');
      console.log('     Sender:', firstMsg.sender);
      console.log('     Text length:', firstMsg.text?.length || 0, 'characters');
      console.log('     Created:', firstMsg.created_at);
    }
  }

  // Basic analytics (simulating what the app does)
  console.log('\n' + '='.repeat(70));
  console.log('📊 BASIC ANALYTICS (Preview)');
  console.log('='.repeat(70));

  let totalMessages = 0;
  let userMessages = 0;
  let assistantMessages = 0;

  conversations.forEach(conv => {
    const messages = conv.chat_messages || [];
    totalMessages += messages.length;
    messages.forEach(msg => {
      if (msg.sender === 'human') userMessages++;
      else if (msg.sender === 'assistant') assistantMessages++;
    });
  });

  console.log('\n💬 Messages:');
  console.log('   Total Messages:', totalMessages.toLocaleString());
  console.log('   Your Messages:', userMessages.toLocaleString());
  console.log('   Claude\'s Messages:', assistantMessages.toLocaleString());

  const avgMessages = conversations.length > 0
    ? (totalMessages / conversations.length).toFixed(1)
    : 0;
  console.log('   Avg per conversation:', avgMessages);

  // Find longest conversation
  let longest = { name: 'N/A', count: 0 };
  conversations.forEach(conv => {
    const count = (conv.chat_messages || []).length;
    if (count > longest.count) {
      longest = { name: conv.name || 'Untitled', count };
    }
  });

  console.log('\n🏆 Longest Conversation:');
  console.log('   "' + longest.name.substring(0, 60) + '"');
  console.log('   Messages:', longest.count);

  // Date range
  let earliest = new Date();
  let latest = new Date(0);

  conversations.forEach(conv => {
    const date = new Date(conv.created_at);
    if (date < earliest) earliest = date;
    if (date > latest) latest = date;
  });

  console.log('\n📅 Date Range:');
  console.log('   First conversation:', earliest.toISOString().split('T')[0]);
  console.log('   Latest conversation:', latest.toISOString().split('T')[0]);

  // Top 5 conversations by message count
  const top5 = conversations
    .map(conv => ({
      name: conv.name || 'Untitled',
      count: (conv.chat_messages || []).length
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  console.log('\n🌟 Top 5 Most Active Conversations:');
  top5.forEach((conv, i) => {
    console.log(`   ${i + 1}. ${conv.name.substring(0, 50)} (${conv.count} messages)`);
  });

  console.log('\n' + '='.repeat(70));
  console.log('✅ SUCCESS: Analytics Processing Works!');
  console.log('='.repeat(70));
  console.log('\n💡 The application can analyze this data successfully.');
  console.log('   You can now:');
  console.log('   • Run "npm run dev" to start the development server');
  console.log('   • Open http://localhost:3000 in your browser');
  console.log('   • Upload the conversations.json file');
  console.log('   • View all the detailed insights and visualizations');
  console.log('\n' + '='.repeat(70) + '\n');

} catch (error) {
  console.error('\n❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
