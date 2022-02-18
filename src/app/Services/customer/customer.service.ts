

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from '../../../environments/environment';
import { Response } from 'src/app/models/Person-detail.model';
import { CustomerModel } from 'src/app/models/customr.model';

@Injectable({
  providedIn: 'root'
})


export class CustomerService {

    constructor(private http: HttpClient) { }

    readonly baseURL = environment.apiUrl+'api/';
    formData: CustomerModel = new CustomerModel();
    list: CustomerModel[];
    response:Response=new Response();

    postCustomer() {
      debugger;
      return this.http.post(this.baseURL+"Customer/AddCustomer", JSON.stringify( this.formData)).toPromise().then(res=>{
        this.formData=new CustomerModel()
        this.refreshList();
      });
    }
    
    putCustomer() {
      return this.http.post(this.baseURL+"Customer/UpdateCustomer", JSON.stringify( this.formData));
    }
    
    deleteCustomer(id: number) {
      return this.http.delete(this.baseURL+"Customer/DeleteCustomer?ID="+id).toPromise().then(res=>{
        this.refreshList()
      });
    }
    
      refreshList() {
        this.http.post(this.baseURL +"Customer/GetCustomers",{})
          .toPromise()
          .then((data) => {
            debugger
            this.response=data as Response;
            this.list=this.response.data as CustomerModel[];
          });
    
      }
}