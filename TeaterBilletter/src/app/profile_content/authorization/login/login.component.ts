import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth.service';
import {Router} from '@angular/router';
import {VisualComponentService} from '../../../visualComponent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, public visualService: VisualComponentService) {
    if (this.authService.isUserLoggedIn() && !this.visualService.getConfirm()) {
      this.router.navigate(['/profile']);
    }
  }

  ngOnInit() { }

  public OnLoginPressed(name: string, password: string, shouldRoute: boolean = true) {
    this.authService.login(name, password, shouldRoute);
  }
}
