import { ClaudeDataExport, ClaudeConversation, ClaudeMessage, InsightsData, PromptingStyle, BestPractices, Theme, NextSteps } from '@/types/claude';

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

  // Prompting Style Analysis
  const promptingStyle = analyzePromptingStyle(conversations);

  // Best Practices Evaluation
  const bestPractices = analyzeBestPractices(conversations);

  // Theme Extraction
  const themes = extractThemes(conversations);

  // Next Steps Analysis
  const nextSteps = analyzeNextSteps(conversations);

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
    topConversations,
    promptingStyle,
    bestPractices,
    themes,
    nextSteps
  };
}

function analyzePromptingStyle(conversations: ClaudeConversation[]): PromptingStyle {
  const userPrompts = conversations.flatMap(conv =>
    (conv.chat_messages || []).filter(msg => msg.sender === 'human')
  );

  if (userPrompts.length === 0) {
    return {
      avgPromptLength: 0,
      avgWordsPerPrompt: 0,
      questionCount: 0,
      questionPercentage: 0,
      followUpCount: 0,
      codeBlockCount: 0,
      politenessScore: 0,
      styleBreakdown: { questions: 0, commands: 0, descriptions: 0 }
    };
  }

  let totalLength = 0;
  let totalWords = 0;
  let questionCount = 0;
  let followUpCount = 0;
  let codeBlockCount = 0;
  let politeCount = 0;
  let questionStyle = 0;
  let commandStyle = 0;
  let descriptionStyle = 0;

  const politeWords = ['please', 'thank', 'could you', 'would you', 'appreciate'];
  const followUpPhrases = ['also', 'additionally', 'furthermore', 'another', 'can you also'];

  userPrompts.forEach(prompt => {
    const text = prompt.text.toLowerCase();
    totalLength += prompt.text.length;
    totalWords += prompt.text.split(/\s+/).length;

    if (text.includes('?')) questionCount++;
    const codeBlockMatches = text.match(/```/g);
    if (codeBlockMatches) codeBlockCount += (codeBlockMatches.length / 2);
    if (politeWords.some(word => text.includes(word))) politeCount++;
    if (followUpPhrases.some(phrase => text.includes(phrase))) followUpCount++;

    // Style classification
    if (text.includes('?')) {
      questionStyle++;
    } else if (text.match(/^(can you|please|could you|would you|help me)/)) {
      commandStyle++;
    } else {
      descriptionStyle++;
    }
  });

  return {
    avgPromptLength: Math.round(totalLength / userPrompts.length),
    avgWordsPerPrompt: Math.round((totalWords / userPrompts.length) * 10) / 10,
    questionCount,
    questionPercentage: Math.round((questionCount / userPrompts.length) * 100),
    followUpCount,
    codeBlockCount,
    politenessScore: Math.round((politeCount / userPrompts.length) * 100),
    styleBreakdown: {
      questions: questionStyle,
      commands: commandStyle,
      descriptions: descriptionStyle
    }
  };
}

function analyzeBestPractices(conversations: ClaudeConversation[]): BestPractices {
  const userPrompts = conversations.flatMap(conv =>
    (conv.chat_messages || []).filter(msg => msg.sender === 'human')
  );

  if (userPrompts.length === 0) {
    return {
      overallScore: 0,
      strengths: [],
      improvements: [],
      scores: { clarity: 0, specificity: 0, context: 0, formatting: 0 }
    };
  }

  let clarityScore = 0;
  let specificityScore = 0;
  let contextScore = 0;
  let formattingScore = 0;

  const strengths: string[] = [];
  const improvements: string[] = [];

  userPrompts.forEach(prompt => {
    const text = prompt.text;
    const words = text.split(/\s+/).length;

    // Clarity: reasonable length, not too short or too long
    if (words >= 5 && words <= 100) clarityScore++;

    // Specificity: contains specific terms, examples, or details
    if (text.match(/\b(specific|example|like|such as|for instance)\b/i)) specificityScore++;
    if (text.match(/[A-Z][a-z]+[A-Z]/)) specificityScore++; // CamelCase (tech terms)

    // Context: provides background or constraints
    if (words > 15) contextScore++;
    if (text.match(/\b(I'm|I am|I want|I need|my|for my)\b/i)) contextScore++;

    // Formatting: uses code blocks, lists, or structure
    if (text.match(/```/)) formattingScore += 2;
    if (text.match(/^[-*]\s/m)) formattingScore++;
    if (text.match(/\d+\./)) formattingScore++;
  });

  const totalPrompts = userPrompts.length;
  clarityScore = Math.round((clarityScore / totalPrompts) * 100);
  specificityScore = Math.round((specificityScore / totalPrompts) * 100);
  contextScore = Math.round((contextScore / totalPrompts) * 100);
  formattingScore = Math.min(100, Math.round((formattingScore / totalPrompts) * 50));

  const overallScore = Math.round((clarityScore + specificityScore + contextScore + formattingScore) / 4);

  // Determine strengths and improvements
  if (clarityScore >= 70) strengths.push('Clear and concise prompts');
  else improvements.push('Try to be more clear and concise in your prompts');

  if (specificityScore >= 70) strengths.push('Good use of specific examples and details');
  else improvements.push('Include more specific examples and technical details');

  if (contextScore >= 70) strengths.push('Excellent at providing context');
  else improvements.push('Provide more context about your goals and constraints');

  if (formattingScore >= 70) strengths.push('Great use of formatting (code blocks, lists)');
  else improvements.push('Use code blocks and formatting to structure complex prompts');

  return {
    overallScore,
    strengths,
    improvements,
    scores: {
      clarity: clarityScore,
      specificity: specificityScore,
      context: contextScore,
      formatting: formattingScore
    }
  };
}

function extractThemes(conversations: ClaudeConversation[]): Theme[] {
  const themeKeywords = {
    'Web Development': ['react', 'vue', 'angular', 'html', 'css', 'javascript', 'typescript', 'frontend', 'backend', 'web', 'next.js', 'node'],
    'Data & AI': ['python', 'pandas', 'numpy', 'machine learning', 'ai', 'data', 'analysis', 'tensorflow', 'pytorch'],
    'Database': ['sql', 'database', 'mongodb', 'postgres', 'mysql', 'query', 'schema'],
    'DevOps': ['docker', 'kubernetes', 'aws', 'cloud', 'deploy', 'ci/cd', 'git', 'github'],
    'Mobile': ['ios', 'android', 'swift', 'kotlin', 'react native', 'flutter', 'mobile'],
    'Debugging': ['error', 'bug', 'debug', 'fix', 'issue', 'problem', 'not working'],
    'Learning': ['how to', 'what is', 'explain', 'learn', 'understand', 'tutorial'],
    'Code Review': ['review', 'optimize', 'improve', 'refactor', 'best practice'],
    'API Design': ['api', 'rest', 'graphql', 'endpoint', 'request', 'response'],
    'General Programming': ['code', 'function', 'class', 'algorithm', 'programming']
  };

  const themeCounts = new Map<string, number>();
  Object.keys(themeKeywords).forEach(theme => themeCounts.set(theme, 0));

  const allText = conversations.flatMap(conv => [
    conv.name,
    conv.summary,
    ...(conv.chat_messages || []).map(msg => msg.text)
  ]).join(' ').toLowerCase();

  Object.entries(themeKeywords).forEach(([theme, keywords]) => {
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = allText.match(regex);
      if (matches) {
        themeCounts.set(theme, (themeCounts.get(theme) || 0) + matches.length);
      }
    });
  });

  const totalCount = Array.from(themeCounts.values()).reduce((a, b) => a + b, 0);

  return Array.from(themeCounts.entries())
    .map(([name, count]) => ({
      name,
      count,
      percentage: totalCount > 0 ? Math.round((count / totalCount) * 100) : 0
    }))
    .filter(theme => theme.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}

function analyzeNextSteps(conversations: ClaudeConversation[]): NextSteps {
  const incompleteConversations: NextSteps['incompleteConversations'] = [];
  const followUpIdeas: string[] = [];
  const commonPatterns: string[] = [];

  // Find incomplete conversations (ended with a question or short exchange)
  conversations.forEach(conv => {
    const messages = conv.chat_messages || [];
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];

      if (lastMessage.sender === 'human' || messages.length <= 3) {
        const suggestions = generateSuggestions(conv);
        incompleteConversations.push({
          name: conv.name || 'Untitled',
          lastMessage: lastMessage.text.substring(0, 100) + (lastMessage.text.length > 100 ? '...' : ''),
          suggestions
        });
      }
    }
  });

  // Generate follow-up ideas based on themes
  const themes = extractThemes(conversations);
  if (themes.length > 0) {
    followUpIdeas.push(`Deep dive into ${themes[0].name.toLowerCase()} - your most discussed topic`);
    if (themes.length > 1) {
      followUpIdeas.push(`Combine ${themes[0].name} with ${themes[1].name} for advanced projects`);
    }
    followUpIdeas.push('Ask for best practices and common pitfalls in your focus areas');
    followUpIdeas.push('Request code review for your recent projects');
    followUpIdeas.push('Explore advanced techniques in your main domains');
  }

  // Common patterns
  const userMessages = conversations.flatMap(conv =>
    (conv.chat_messages || []).filter(msg => msg.sender === 'human')
  );

  if (userMessages.some(msg => msg.text.toLowerCase().includes('how'))) {
    commonPatterns.push('You often ask "how-to" questions - consider building a personal knowledge base');
  }
  if (userMessages.some(msg => msg.text.toLowerCase().includes('error') || msg.text.toLowerCase().includes('bug'))) {
    commonPatterns.push('Debugging is a common theme - learn systematic debugging techniques');
  }
  if (userMessages.filter(msg => msg.text.length < 50).length > userMessages.length * 0.3) {
    commonPatterns.push('Many short prompts - try providing more context for better responses');
  }

  return {
    incompleteConversations: incompleteConversations.slice(0, 5),
    followUpIdeas: followUpIdeas.slice(0, 5),
    commonPatterns: commonPatterns.slice(0, 5)
  };
}

function generateSuggestions(conv: ClaudeConversation): string[] {
  const suggestions: string[] = [];
  const text = (conv.name + ' ' + conv.summary).toLowerCase();

  if (text.includes('build') || text.includes('create')) {
    suggestions.push('Continue building - ask for next steps or features to add');
    suggestions.push('Request testing strategies for your project');
  }
  if (text.includes('help') || text.includes('question')) {
    suggestions.push('Ask for clarification or examples');
    suggestions.push('Request alternative approaches');
  }
  if (text.includes('error') || text.includes('debug')) {
    suggestions.push('Share the solution once found for documentation');
    suggestions.push('Ask about preventing similar issues');
  }

  if (suggestions.length === 0) {
    suggestions.push('Continue the conversation with follow-up questions');
    suggestions.push('Ask for best practices or advanced techniques');
  }

  return suggestions.slice(0, 3);
}
