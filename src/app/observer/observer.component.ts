import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {

  constructor() {
    type HttpResponse = { code: number, data: string}

    // observers are async ....we subscribe to know when data comes back from the server
    const observable = new Observable<HttpResponse>(subscriber =>{
      console.log("Inside Subscriber");
      subscriber.next({ code: 200, data: "this is data 1..."});
      subscriber.next({ code: 200, data: "this is data 2..."});
      subscriber.next({ code: 200, data: "this is data 3..."});
      subscriber.next({ code: 200, data: 'this is even more data for you to receive'})
      subscriber.error({ code: 500, msg: "an error has occured"})
      setTimeout(() =>{
          subscriber.next({code: 200, data: 'this is more data'});
          subscriber.complete();
      }, 3 * 1000 );
      console.log('subscriber is done emitting...');
    });

    // If we get rid of the following there is no one to subscribe to the data.
    observable.subscribe({
      next(response: HttpResponse){
        console.log('got response', response)
      },
      error(error: any){
        console.error("something went wrong: ", error)
      },
      complete(){
        console.log('done');
      }
    });

   }


  ngOnInit(): void {
  }

}
