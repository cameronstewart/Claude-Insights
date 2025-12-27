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
}
