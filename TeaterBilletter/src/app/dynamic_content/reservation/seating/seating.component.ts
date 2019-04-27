import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit {

  public rows : number[];
  public seats : number[];
  public chosenSeats : Map<string, boolean>;
  public seatClicked;

  constructor() {
    this.rows = [1, 2 ,3 ,4 , 5, 6, 7];
    this.seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    this.chosenSeats = new Map();

    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.seats.length; j++) {
        var row = i.toString();
        var seat = j.toString();
        var id = row.concat(seat);
        this.chosenSeats.set(id, false);
      }
    }
   }

  ngOnInit() {
  }

  public OnSeatChosen(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var id = idAttr.nodeValue;
    console.log(id);
    this.seatClicked = id;
    this.UpdateChosenSeatStatus(this.seatClicked);
  }

  public GetSeatStatus(seatId) : boolean {
    return this.chosenSeats.get(seatId);
  }

  private UpdateChosenSeatStatus(seatId) {
    if (this.chosenSeats.get(seatId)) {
      this.chosenSeats.set(seatId, false);
    } else {
      this.chosenSeats.set(seatId, true);
    }
  }
}
