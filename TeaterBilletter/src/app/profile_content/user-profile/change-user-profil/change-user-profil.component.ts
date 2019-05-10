import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Customer} from '../../../../model/customer';
import {Booking} from '../../../../model/booking';
import {RestapiService} from '../../../service/restapi.service';


@Component({
  selector: 'app-change-user-profil',
  templateUrl: './change-user-profil.component.html',
  styleUrls: ['./change-user-profil.component.css']
})
export class ChangeUserProfilComponent implements OnInit {

  constructor(private userService: UserService, private client: HttpClient, private restapi: RestapiService) { }

  ngOnInit() {
  }

  public getUserAddress(): string {
    return this.userService.getUserAdresse();
  }

  public getUserEmail(): string {
    return this.userService.getUserEmail();
  }

  onSaveClicked(userAdress: string, userEmail: string) {
    let age = this.userService.customer.age;
    let gender = this.userService.customer.gender;
    let id = this.userService.customer.id;
    let name = this.userService.customer.name;
    let phone = this.userService.customer.phone;

    let customer: Customer = new class implements Customer {
      address: string = userAdress;
      age: number = age;
      email: string = userEmail;
      gender: string = gender;
      id: string = id;
      name: string = name;
      phone: string = phone;
    }

    let json = JSON.stringify(customer);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log(json);

    this.client.put<Customer>(this.restapi.customerUrl(), json, httpOptions).subscribe((result: Customer) => {
      window.location.reload();
    }, error => {
      console.log(error.error);
    });
  }
}
