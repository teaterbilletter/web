import {DatePipe} from '@angular/common';
import {Injectable} from '@angular/core';
import {Show} from '../../model/show';

@Injectable()
export class ShowService {

  private show?: Show;
  private dates;
  public numberOfTickets: number = 0;

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

  public setShow(show: Show) {
    this.show = show;
  }

  public getShow(): Show {
    return this.show;
  }
}
