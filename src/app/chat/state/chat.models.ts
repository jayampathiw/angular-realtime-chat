export interface ChatRoom {
  id: string;
  name: string;
}

export interface Message {
  id?: string;
  text: string;
  senderId: string;
  timestamp: number | Date;
}

export interface ChatState {
  rooms: ChatRoom[];
  selectedRoomId: string | null;
  messages: Record<string, Message[]> | null;
  loading: boolean;
  error: string | null;
}
