import { createAction, props } from '@ngrx/store';
import { ChatRoom, Message } from './chat.models';

export const loadChatRooms = createAction('[Chat] Load Chat Rooms');
export const loadChatRoomsSuccess = createAction(
  '[Chat] Load Chat Rooms Success',
  props<{ rooms: ChatRoom[] }>()
);
export const addMessage = createAction(
  '[Chat] Add Message',
  props<{ message: Message }>()
);
