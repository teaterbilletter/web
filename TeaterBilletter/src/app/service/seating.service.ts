import {Hall} from '../../model/hall';
import {Seat} from '../../model/seat';

export class SeatingService {
  private hall?: Hall;
  private occupiedSeats;

  public chosenSeats : Map<string, boolean>;

  public setHall(hall: Hall) {
    this.hall = hall;
  }

  public getHall(): Hall {
    return this.hall;
  }

  public setOccupiedSeats(occupiedSeats: Array<Seat>) {
    this.occupiedSeats = occupiedSeats;
  }

  public getOccupiedSeats(): Array<Seat> {
    return this.occupiedSeats;
  }
}
