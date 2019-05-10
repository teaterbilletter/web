export class RestapiService {

  public baseUrl: string = "https://disttickets.northeurope.cloudapp.azure.com:5443/";
  public bookingUrl: string = this.baseUrl.concat('Booking/');

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
