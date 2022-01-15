export interface Customer{
  id?:number;
  firstName?: string;
  lastName?: string;
  email?: string;
  active?: boolean
}

export const CUSTOMERS:Customer[] = [
  {
    id:1,
    firstName:"Jimmy",
    lastName: "Johnson",
    email: "test@gmail.com",
    active : true
  },
  {
    id:2,
    firstName:"Marilyn",
    lastName: "Monroe",
    email: "MandM@gmail.com",
    active: false
  },
  {
    id:3,
    firstName:"George",
    lastName: "Martin",
    email:"wot@gmail.com",
    active: true
  }
]
