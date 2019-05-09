
export class UserService {
  public userAdress: string;
  public userEmail: string;

  public setuserAdresse(userAdress: string) {
    this.userAdress = userAdress;
    console.log("setUserAdress ran with " + userAdress);
  }

  public setUserEmail(userEmail: string) {
    this.userEmail = userEmail; 
  }

  public getUserAdresse() {
    console.log("getUserAdress ran with: " + this.userAdress);
    return this.userAdress;
  }
  public getUserEmail() {
    return this.userEmail;
  }
 }




