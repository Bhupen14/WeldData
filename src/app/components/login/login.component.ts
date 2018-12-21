import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myData:DataServiceService, private router:Router) { }

  ngOnInit() 
  {
  
  
  }

  userLogin() :void
  {


      this.myData.sendLoginStatus(true);

      this.router.navigate(['/Home']);
      
  }


}
