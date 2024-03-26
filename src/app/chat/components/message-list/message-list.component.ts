import { Component, OnInit } from '@angular/core';
import { ChatFacade } from '../../services/chat-facade.service';
import { FormsModule } from '@angular/forms';
import { Message } from '../../state/chat.models';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [FormsModule, DatePipe, NgFor, NgIf, AsyncPipe],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent implements OnInit {
  messages$!: Observable<Message[]>;

  constructor(private chatFacade: ChatFacade) {} // Inject the facade

  ngOnInit() {
    // Assuming the facade can provide the current room's messages
    this.messages$ = this.chatFacade.getSelectedRoomMessages();
  }
}
