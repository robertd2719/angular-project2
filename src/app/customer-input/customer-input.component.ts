import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../data/data';

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css']
})
export class CustomerInputComponent implements OnInit {
  firstName:string;
  lastName:string;
  email:string;
  active:boolean;
  newCust:Customer;

  @Input()
  customers:Customer[]=[];

  @Output()
  onCustomerAdd = new EventEmitter<Customer[]>();

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.active = true;
    this.newCust = {};
  }

  createNewCustomer():void{
    this.newCust = {
      id: this.customers.length + 1,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      active: this.active
    }
    if (this.firstName ==='' || this.lastName ==='' || this.email === '' ){
      alert("Please enter correct user name and password")
    } else {
      this.customers.push(this.newCust);
      this.onCustomerAdd.emit(this.customers);
      this.clearUserInput();
    }
  }
  clearUserInput(){
    this.firstName='';
    this.lastName='';
    this.email='';
  }

  ngOnInit(): void {
  }

}
