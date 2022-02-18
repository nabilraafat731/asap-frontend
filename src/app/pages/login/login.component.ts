import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private user:UserService,private router:Router) {}

  public email='';
  public password='';

  ngOnInit() {
    if(localStorage.getItem("accessToken") !=null&&localStorage.getItem("accessToken") !=undefined&&localStorage.getItem("accessToken") !='null'){
      this.router.navigate(['/dashboard']);
    }
  }
  userLogin(){
    if( this.email != ''&& this.password != ''){
     let body={
       "email":this.email,
       "password":this.password
     }
   
   
     this.user.userLogin(body).subscribe((data) => {
       debugger
       if (data) {
         debugger
         console.log("user login true",data);
                localStorage.setItem("accessToken", data.data.accessToken );
                localStorage.setItem("Role", data.data.userData.role);
                localStorage.setItem("name", data.data.userData.username);
                localStorage.setItem("personId", data.data.userData.personID);
                localStorage.setItem("customerId", data.data.userData.customerID);
               //  commit("SET_BEARER", data.Data.accessToken)
               this.router.navigate(['/dashboard']);
       }
     }
   );
   
    }
   
     }

  ngOnDestroy() {
  }

}
