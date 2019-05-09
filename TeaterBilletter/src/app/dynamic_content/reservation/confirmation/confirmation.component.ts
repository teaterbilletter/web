import { Component, OnInit } from '@angular/core';
import {ShowService} from '../../../service/show.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private showService: ShowService) { }

  ngOnInit() {
  }

}
