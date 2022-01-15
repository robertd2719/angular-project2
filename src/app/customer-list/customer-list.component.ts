import { Component, Input, OnInit } from '@angular/core';

import {Customer} from '../data/data';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Input()
  customers: Customer[] = [];

  constructor() { }


  ngOnInit(): void {
  }

  checkActive(customer: Customer){
    return customer.active ? {'color':'green'} : {'color':'red'};
  }

}
