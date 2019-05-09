import {Component, OnInit} from '@angular/core';
import {VisualComponentService} from '../../../visualComponent.service';
import {ShowService} from '../../../service/show.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})

export class DatepickerComponent implements OnInit {

  public dates: Array<Date> = new Array<Date>();
  public showSeats: boolean = false;

  constructor(private visualService: VisualComponentService, private showService: ShowService) { }

  ngOnInit() {
    setTimeout(() => {
      this.dates = this.showService.getShowDates();
    }, 500);
  }

  onSelectElementClicked() {
    let dateSelector: HTMLSelectElement = <HTMLSelectElement>document.getElementById("showDateSelector");
    console.log(dateSelector.options[dateSelector.selectedIndex].text);
    this.visualService.setShowSeats(true);
  }
}
