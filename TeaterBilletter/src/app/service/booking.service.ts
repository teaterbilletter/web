import {Show} from '../../model/show';
import {Seat} from '../../model/seat';

export class BookingService {
  public date?: string;
  public show?: Show;
  public seats?: Array<Seat> = new Array<Seat>();
  public availableTimes?: Array<string> = new Array<string>();
}
