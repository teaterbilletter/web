import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  public isUserLoggedIn() {
    return !this.authService.isTokenExpired(this.authService.getToken());
  }
}
