import {Component, OnInit} from '@angular/core';
import {VisualComponentService} from '../../../visualComponent.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})

export class DatepickerComponent implements OnInit {

  public showSeats: boolean = false;

  constructor(private visualService: VisualComponentService) { }

  ngOnInit() {
  }

  public ShowSeats(date) {
    this.showSeats = true;

    let dates = date.value.split(" - ");
    console.log(dates[0]);
    console.log(dates[1]);

    let fromDate = new Date(dates[0]);

    console.log(fromDate.getTime());

    this.visualService.setShowSeats(this.showSeats);
    return this.showSeats
  }

}
