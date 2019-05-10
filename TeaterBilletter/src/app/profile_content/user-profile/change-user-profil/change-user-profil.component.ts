import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";


@Component({
  selector: 'app-change-user-profil',
  templateUrl: './change-user-profil.component.html',
  styleUrls: ['./change-user-profil.component.css']
})
export class ChangeUserProfilComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public getUserAddress(): string {
    return this.userService.getUserAdresse();
  }

  public getUserEmail(): string {
    return this.userService.getUserEmail();
  }

}
