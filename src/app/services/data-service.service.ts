import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService 
{

  private subject = new Subject<any>();




  constructor() { }


    sendMessage(message : string)
    {
        this.subject.next({message });
    }
    
    clearMessage()
    {

    }

    getMessage():Observable<any>
    {
      return this.subject.asObservable()
    }


    sendLoginStatus(loginStatus:boolean)
    {
        this.subject.next({loginStatus});
    }

    getLognStatus():Observable<any>
    {
      return this.subject.asObservable();
    }
}
