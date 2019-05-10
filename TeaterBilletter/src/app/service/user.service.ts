
export class UserService {
  public userAdress: string;
  public userEmail: string;

  public setuserAdresse(userAdress: string) {
    this.userAdress = userAdress;
  }

  public setUserEmail(userEmail: string) {
    this.userEmail = userEmail; 
  }

  public getUserAdresse() {
    return this.userAdress;
  }
  public getUserEmail() {
    return this.userEmail;
  }
 }




