export class RestapiService {

  public baseUrl: string = "https://ticket.northeurope.cloudapp.azure.com/";

  public showUrl(): string {
    return this.baseUrl.concat("Show");
  }
}
