import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ChatActions from '../state/chat.actions';
import { ChatState, Message } from '../state/chat.models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatFacade {
  constructor(private store: Store<ChatState>) {}

  sendMessage(message: Message) {
    this.store.dispatch(ChatActions.addMessage({ message }));
  }

  getSelectedRoomMessages(): Observable<Message[]> {
    // return this.store.select("");
    return of([
      {
        id: '123',
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        senderId: '123',
        timestamp: new Date().getTime(),
      },
    ]);
  }
}
