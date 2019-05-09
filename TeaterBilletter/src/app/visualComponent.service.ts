export class VisualComponentService {
  public showSeats;
  private confirm;

  public setShowSeats(value: boolean) {
    this.showSeats = value;
  }

  public setConfirm(value: boolean) {
    this.confirm = value;
  }

  public getConfirm(): boolean {
    return this.confirm;
  }
}
