export interface ClaudeMessage {
  uuid: string;
  text: string;
  sender: 'human' | 'assistant';
  created_at: string;
  updated_at: string;
}

export interface ClaudeConversation {
  uuid: string;
  name: string;
  summary: string;
  created_at: string;
  updated_at: string;
  chat_messages: ClaudeMessage[];
}

export interface ClaudeDataExport {
  conversations?: ClaudeConversation[];
  [key: string]: any;
}

export interface PromptingStyle {
  avgPromptLength: number;
  avgWordsPerPrompt: number;
  questionCount: number;
  questionPercentage: number;
  followUpCount: number;
  codeBlockCount: number;
  politenessScore: number;
  styleBreakdown: {
    questions: number;
    commands: number;
    descriptions: number;
  };
}

export interface BestPractices {
  overallScore: number;
  strengths: string[];
  improvements: string[];
  scores: {
    clarity: number;
    specificity: number;
    context: number;
    formatting: number;
  };
}

export interface Theme {
  name: string;
  count: number;
  percentage: number;
}

export interface NextSteps {
  incompleteConversations: Array<{
    name: string;
    lastMessage: string;
    suggestions: string[];
  }>;
  followUpIdeas: string[];
  commonPatterns: string[];
}

export interface InsightsData {
  totalConversations: number;
  totalMessages: number;
  userMessages: number;
  assistantMessages: number;
  dateRange: {
    start: string;
    end: string;
  };
  avgMessagesPerConversation: number;
  longestConversation: {
    name: string;
    messageCount: number;
  };
  usageByDay: Array<{
    date: string;
    count: number;
  }>;
  usageByHour: Array<{
    hour: number;
    count: number;
  }>;
  conversationLengthDistribution: Array<{
    range: string;
    count: number;
  }>;
  topConversations: Array<{
    name: string;
    messageCount: number;
    created: string;
  }>;
  promptingStyle: PromptingStyle;
  bestPractices: BestPractices;
  themes: Theme[];
  nextSteps: NextSteps;
}
