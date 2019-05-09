import { Component, OnInit } from '@angular/core';
import {SeatingService} from '../../../service/seating.service';
import {Seat} from '../../../../model/seat';
import {ShowService} from '../../../service/show.service';

declare var $: any;

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit {

  public rows = new Array(0);
  public seats = new Array(0);
  public chosenSeats: Map<string, boolean> = new Map<string, boolean>();
  public seatClicked;

  constructor(private seatingService: SeatingService, private showService: ShowService) {

   }

  ngOnInit() {
    setTimeout(() => {
      this.rows = new Array(this.seatingService.getHall().rows);
      this.seats = new Array(this.seatingService.getHall().seats);

      this.chosenSeats = new Map();

      for (let i = 0; i < this.rows.length; i++) {
        for (let j = 0; j < this.seats.length; j++) {
          var row = i.toString();
          var seat = j.toString();
          var id = row.concat(seat);
          this.chosenSeats.set(id, false);
        }
      }
    }, 500);
  }

  public OnSeatChosen(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var id = idAttr.nodeValue;
    this.seatClicked = id;
    this.UpdateChosenSeatStatus(this.seatClicked);
  }

  public GetSeatStatus(seatId) : boolean {
    return this.chosenSeats.get(seatId);
  }

  public updateOccupiedSeatsOnSeatVisualMap() {
    for (let seat of this.seatingService.getOccupiedSeats()) {
      this.updateOccupiedSeats(seat);
    }
  }

  private updateOccupiedSeats(seat: Seat) {
    let jqueryElementId = "#".concat(seat.row_number + "" + seat.seat_number);
    var color = "linear-gradient(to top, #761818, #761818, #761818, #761818, #761818, #B54041,  #F3686A)";
    $(jqueryElementId).css("background", color);
  }

  private UpdateChosenSeatStatus(seatId) {
    var jqueryElementId = "#".concat(seatId);
    var color;


    if (this.seatingService.getOccupiedSeatMap().get(seatId) == null) {
      if (this.chosenSeats.get(seatId)) {
        this.chosenSeats.set(seatId, false);
        color = "linear-gradient(to top, #2E7D32, #388E3C, #43A047, #4CAF50, #66BB6A, #81C784,  #A5D6A7)";
        this.showService.numberOfTickets--;
      } else {
        this.chosenSeats.set(seatId, true);
        color = "linear-gradient(to top, #761818, #761818, #761818, #761818, #761818, #B54041,  #F3686A)";
        this.showService.numberOfTickets++;
      }

      $(jqueryElementId).css("background", color);
    }
  }
}
