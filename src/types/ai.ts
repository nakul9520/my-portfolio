export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
  streaming?: boolean;
}

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  isOpen: boolean;
  error: string | null;
}

export interface StreamChunk {
  text: string;
  done: boolean;
}
