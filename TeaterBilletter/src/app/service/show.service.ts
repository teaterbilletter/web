import {DatePipe} from '@angular/common';
import {Injectable} from '@angular/core';

@Injectable()
export class ShowService {

  private dates;

  constructor(private datePipe: DatePipe) {}

  public getShowId(): string {
    return window.sessionStorage.getItem('showId');
  }

  public setShowId(showId: string) {
    window.sessionStorage.setItem('showId', showId);
  }

  public setShowDates(dates: Array<Date>) {
    this.dates = new Array();

    for (let date of dates) {
      let tempDate = this.datePipe.transform(date, "yyyy-MM-dd HH:mm:ss");
      this.dates.push(tempDate);
    }
  }

  public getShowDates() {
    return this.dates;
  }
}
