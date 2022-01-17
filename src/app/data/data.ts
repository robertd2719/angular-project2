import {UUID} from 'angular2-uuid';
export interface Customer{
  id?:any;
  firstName?: string;
  lastName?: string;
  email?: string;
  active?: boolean
}

export const CUSTOMERS:Customer[] = [
  {
    id:UUID.UUID(),
    firstName:"Jimmy",
    lastName: "Johnson",
    email: "test@gmail.com",
    active : true
  },
  {
    id:UUID.UUID(),
    firstName:"Marilyn",
    lastName: "Monroe",
    email: "MandM@gmail.com",
    active: false
  },
  {
    id:UUID.UUID(),
    firstName:"George",
    lastName: "Martin",
    email:"wot@gmail.com",
    active: true
  }
]
