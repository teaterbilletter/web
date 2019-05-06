export class ShowService {

  public getShowId(): string {
    return window.sessionStorage.getItem('showId');
  }

  public setShowId(showId: string) {
    window.sessionStorage.setItem('showId', showId);
  }
}
