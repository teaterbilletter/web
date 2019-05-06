export class RestapiService {

  public baseUrl: string = "https://ticket.northeurope.cloudapp.azure.com:5443/";

  public showUrl(): string {
    return this.baseUrl.concat("Show/");
  }
}
