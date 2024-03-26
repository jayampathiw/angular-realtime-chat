import { Component } from '@angular/core';
import { MessageListComponent } from '../message-list/message-list.component';
import { MessageInputComponent } from '../message-input/message-input.component';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css',
  imports: [MessageListComponent, MessageInputComponent],
})
export class ChatRoomComponent {}
