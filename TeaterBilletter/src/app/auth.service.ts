import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
import {RestapiService} from './service/restapi.service';
import {Router} from '@angular/router';

export const TOKEN_NAME: string = 'token';
export const USER_ID: string = 'userId';

interface LoginResult {
  response: string;
  token?: string;
  username: string;
}

@Injectable()
export class AuthService {

  constructor(private client: HttpClient, private restapi: RestapiService, private router: Router) { }

  public baseUrl = this.restapi.authUrl();

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  getUserId(): string {
    return localStorage.getItem(USER_ID);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  setUserId(userId: string) {
    localStorage.setItem(USER_ID, userId);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn(): boolean {
    return !this.isTokenExpired(this.getToken());
  }

  login(name: string, password: string, shouldNavigate: boolean) {
    this.client.post<LoginResult>(this.baseUrl, {name, password}).subscribe((result: LoginResult) => {
      this.setToken(result.token);
      this.setUserId(result.username);

      if (shouldNavigate) {
        this.router.navigate(['/profile']);
      }
    }, error => {
      console.log(error.error);
      window.alert(error.error);
    });
  }
}
