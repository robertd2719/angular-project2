import { Component, OnInit } from '@angular/core';
import { CUSTOMERS, Customer} from '../data/data';

@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-main.component.html',
  styleUrls: ['./customer-main.component.css']
})
export class CustomerMainComponent implements OnInit {
  customers:Customer[];

  constructor() {
    this.customers = CUSTOMERS;
  }


  ngOnInit(): void {
  }

}