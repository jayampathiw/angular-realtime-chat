import { Component } from '@angular/core';
import { ChatFacade } from '../../services/chat-facade.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule, NgFor, AsyncPipe],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.css',
})
export class MessageInputComponent {
  messageText: any;
  currentUserId: any;

  constructor(private chatFacade: ChatFacade) {}

  sendMessage() {
    if (this.messageText.trim()) {
      const message = {
        // Assume you have user ID and other necessary properties
        text: this.messageText,
        senderId: 'your_user_id',
        timestamp: new Date().getTime(),
      };
      this.chatFacade.sendMessage(message);
      this.messageText = '';
    }
  }
}
