import { Injectable, Inject ,EventEmitter,Output} from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';




declare var jquery: any;
declare var $: any;


@Injectable({
	providedIn: 'root'
})

export class UserService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    private _url: string = environment.apiUrl;
  constructor(private router: Router, private http:HttpClient) { }

  userLogin(data:any){

    debugger
      let body=JSON.stringify(data)


    return this.http.post<any>(this._url + 'api/Account/Login' ,data);
  }
  userLogout(){

    return this.http.get<any>(this._url + 'logout?FCMToken=' + localStorage.getItem("accessToken"));
  }
  getSteps(){
    //   console.log("userSignUp",data);

      if(localStorage.getItem("accessToken") !=null && localStorage.getItem("accessToken") !='' ){
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+localStorage.getItem("accessToken"),
        });
      }else{
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        });
      }


    return this.http.get<any>(this._url + 'api/Step/GetAllSteps' ,{'headers':headers});
  }

  addStep( data:any){
    //   console.log("userSignUp",data);

      if(localStorage.getItem("accessToken") !=null && localStorage.getItem("accessToken") !='' ){
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+localStorage.getItem("accessToken"),
        });
      }else{
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        });
      }


    return this.http.post<any>(this._url + 'api/Step/AddStep',data ,{'headers':headers});
  }

  editItem( data:any){
    //   console.log("userSignUp",data);

      if(localStorage.getItem("accessToken") !=null && localStorage.getItem("accessToken") !='' ){
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+localStorage.getItem("accessToken"),
        });
      }else{
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        });
      }


    return this.http.post<any>(this._url + 'api/Item/UpdateItem',data ,{'headers':headers});
  }
  addItem( data:any){
    //   console.log("userSignUp",data);

      if(localStorage.getItem("accessToken") !=null && localStorage.getItem("accessToken") !='' ){
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+localStorage.getItem("accessToken"),
        });
      }else{
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        });
      }


    return this.http.post<any>(this._url + 'api/Item/AddItem',data ,{'headers':headers});
  }
  deleteStep( ID:any){
    //   console.log("userSignUp",data);

      if(localStorage.getItem("accessToken") !=null && localStorage.getItem("accessToken") !='' ){
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+localStorage.getItem("accessToken"),
        });
      }else{
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        });
      }

    console.log(ID);
    return this.http.delete<any>(this._url + 'api/Step/DeleteStep?ID='+ID,{'headers':headers});
  }
  deleteItem( ID:any){
    //   console.log("userSignUp",data);

      if(localStorage.getItem("accessToken") !=null && localStorage.getItem("accessToken") !='' ){
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+localStorage.getItem("accessToken"),
        });
      }else{
        var headers= new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        });
      }

    console.log(ID);
    return this.http.delete<any>(this._url + 'api/Item/DeleteItem?ID='+ID,{'headers':headers});
  }
}
