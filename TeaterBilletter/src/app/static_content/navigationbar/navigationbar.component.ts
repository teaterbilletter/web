import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  private isLoggedIn;

  public itemText: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isTokenExpired(this.authService.getToken());

    this.itemText = this.isLoggedIn ? 'LOG IN' : 'PROFILE';
  }
}
