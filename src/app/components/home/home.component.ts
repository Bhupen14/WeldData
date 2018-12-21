import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from './../../services/data-service.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{

  loginStatus:any;
  subscription : Subscription;

  constructor(private router:Router,private myData:DataServiceService) 
  { 

  }

  ngOnInit() 
  {




    this.subscription = this.myData.getLognStatus().subscribe
    (
      loginStatus => 
      {
        this.loginStatus = loginStatus['loginStatus'];
      }
    );


    
    if(!this.loginStatus)
    {
     this.router.navigate(['/Login']);
  
    }





    console.log(this.loginStatus);


  }
}
