import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  public showSeats: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public ShowSeats(date) {
    this.showSeats = true;

    console.log(date.value);

    return this.showSeats
  }

}
