import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-time',
  templateUrl: './available-time.component.html',
  styleUrls: ['./available-time.component.css']
})
export class AvailableTimeComponent implements OnInit {

  public timeSlots : number[];

  constructor() { 
    this.timeSlots = [1, 2 ,3 ,4 , 5, 6, 7];
  }

  ngOnInit() {
  }

}
