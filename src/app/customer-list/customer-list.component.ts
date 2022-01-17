import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {Customer} from '../data/data';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Input()
  customers: Customer[] = [];

  @Output()
  onCustomerDelete = new EventEmitter<Customer[]>();  //ensure this is the correct EventEmitter

  constructor() { }


  ngOnInit(): void {
  }

  deleteMe(customer:Customer){
    this.customers = this.customers.filter(item => item.id !== customer.id)
    this.onCustomerDelete.emit(this.customers);
  }

  checkActive(customer: Customer){
    return customer.active ? {'color':'green'} : {'color':'red'};
  }

}
