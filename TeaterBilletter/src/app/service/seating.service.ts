import {Hall} from '../../model/hall';
import {Seat} from '../../model/seat';

export class SeatingService {
  private hall?: Hall;
  private occupiedSeats;

  private occupiedSeatMap: Map<string, Seat> = new Map<string, Seat>();
  
  public setHall(hall: Hall) {
    this.hall = hall;
  }

  public getHall(): Hall {
    return this.hall;
  }

  public setOccupiedSeats(occupiedSeats: Array<Seat>) {
    this.occupiedSeats = occupiedSeats;

    for (let seat of occupiedSeats) {
      let seatId = seat.row_number + "" + seat.seat_number;
      this.occupiedSeatMap.set(seatId, seat);
    }
  }

  public getOccupiedSeats(): Array<Seat> {
    return this.occupiedSeats;
  }

  public getOccupiedSeatMap() {
    return this.occupiedSeatMap;
  }
}
