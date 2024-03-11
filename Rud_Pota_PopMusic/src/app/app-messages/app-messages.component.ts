import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesServiceService } from '../messages-service.service';

@Component({
  selector: 'app-app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-messages.component.html',
  styleUrl: './app-messages.component.css'
})
export class AppMessagesComponent implements OnInit {
  messages: string[] = [];

  constructor(private messagesService: MessagesServiceService) {}

  ngOnInit(): void {
    this.messagesService.messages$.subscribe((message) => {
      this.messages.push(message);
    })
  }

}
