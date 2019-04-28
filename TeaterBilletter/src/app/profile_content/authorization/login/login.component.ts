import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface LoginResult {
  response: string;
  token?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public baseUrl = 'https://ticket.northeurope.cloudapp.azure.com:5443/Endpoint/login';
  private response: string;

  constructor(private client: HttpClient) { }

  ngOnInit() {
  }

  public OnLoginPressed(username: string, password: string) {
    this.client.post<LoginResult>(this.baseUrl, {username, password}).subscribe((result: LoginResult) => {
      this.response = result.response;
      localStorage.setItem('token', result.token);
    }, error => {
      console.log(error.error);
      window.alert(error.error);
    });
  }
}
