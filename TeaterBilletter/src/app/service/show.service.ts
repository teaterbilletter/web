export class ShowService {
  private showId: string;

  public getShowId(): string {
    return this.showId;
  }

  public setShowId(showId: string) {
    this.showId = showId;
    console.log("This is was set in the service: " + showId);
  }
}
