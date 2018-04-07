import { Component, OnInit } from '@angular/core';
import { MessagesService } from './../messages.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  message:string;
  sub:any;
  i: number;

  constructor(private msg:MessagesService) {
    this.i = 1;
  }

  ngOnInit() {
   this.sub = this.msg.currentMessage.subscribe(message => this.message = message);    
  }

  newMessage() {
    this.msg.changeMessage("Msg " + this.i + " from One");
    this.i++;
  }

  stopReceiving(){
    this.sub.unsubscribe();
  }

}
