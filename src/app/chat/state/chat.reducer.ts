import { createReducer, on } from '@ngrx/store';
import { ChatRoom, ChatState, Message } from './chat.models';
import * as ChatActions from './chat.actions';

// ... Initial state
export const initialState: ChatState = {
  rooms: [],
  selectedRoomId: null,
  messages: null,
  loading: false,
  error: null,
};

export const chatReducer = createReducer(
  initialState,
  on(ChatActions.loadChatRoomsSuccess, (state, { rooms }) => ({
    ...state,
    rooms,
  })),
  on(ChatActions.addMessage, (state, { message }) => ({
    ...state /* update for new message */,
  }))
  // ... more reducer cases
);
