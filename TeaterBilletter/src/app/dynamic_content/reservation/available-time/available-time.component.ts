import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-time',
  templateUrl: './available-time.component.html',
  styleUrls: ['./available-time.component.css']
})
export class AvailableTimeComponent implements OnInit {

  public timeSlots : number[];
  public confirmation = false;

  constructor() { 
    this.timeSlots = [1, 2 ,3 ,4 , 5, 6, 7];
  }

  ngOnInit() {
  }

  private setConfirmationMessage() {
    this.confirmation = true;
  }

  private getConfirmationMessage() {
    return this.confirmation;
  }
}
