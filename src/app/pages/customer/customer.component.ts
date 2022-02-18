import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer/customer.service';


@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {
  constructor(public customerService:CustomerService,private router:Router) {}



  ngOnInit() {
    this.customerService.refreshList();
  
  }

 
   addCustomer()
   {
    this.customerService.postCustomer();
   }

   deleteCustomer(customerId)
   {
    this.customerService.deleteCustomer(customerId);
   }
  ngOnDestroy() {
    this.customerService.list=[];
  }

}
