import {Hall} from '../../model/hall';

export class SeatingService {
  private hall?: Hall;
  private rows?: number;
  private seats?: number;
  public chosenSeats : Map<string, boolean>;

  public setHall(hall: Hall) {
    this.hall = hall;
    this.seats = hall.seats;
    this.rows = hall.rows;
    console.log("SetHall has run");
  }

  public getHall(): Hall {
    return this.hall;
  }

  public setRows(rows: number) {
    this.rows = rows;
  }

  public setSeats(seats: number) {
    this.seats = seats;
  }
}
