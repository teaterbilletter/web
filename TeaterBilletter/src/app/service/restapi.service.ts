export class RestapiService {

  public baseUrl: string = "https://ticket.northeurope.cloudapp.azure.com:5443/";

  public authUrl(): string {
    return this.baseUrl.concat('Login');
  }

  public showUrl(): string {
    return this.baseUrl.concat("Show/");
  }
}
