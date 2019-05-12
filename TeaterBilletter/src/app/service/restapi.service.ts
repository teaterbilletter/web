export class RestapiService {

  public baseUrl: string = "https://disttickets.northeurope.cloudapp.azure.com/";
  public bookingUrl: string = this.baseUrl.concat('Booking/');
  public bookingsUrl: string = this.baseUrl.concat('Bookings/');
  public allShows: string = this.baseUrl.concat('AllShows/');

  public authUrl(): string {
    return this.baseUrl.concat('UserLogin');
  }

  public showUrl(): string {
    return this.baseUrl.concat('Show/');
  }

  public customerUrl(): string {
    return this.baseUrl.concat('Customer/')
  }

  public occupiedSeatsUrl(): string {
    return this.baseUrl.concat('GetOccupiedSeats/');
  }
}
