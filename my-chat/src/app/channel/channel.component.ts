import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  conversation: string[] = ['Hello', 'Hi, how are you?', 'I am good. How about you?', 'Me too. What are you up to?'];

  constructor() { }

  ngOnInit(): void {
  }

}
