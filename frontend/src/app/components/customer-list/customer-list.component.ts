import { Component, inject, OnInit } from '@angular/core';
import {  RouterModule } from "@angular/router";
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../model/customer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{
  private customerService = inject(CustomerService);

  customers!: Customer[];
  ngOnInit(): void{
    //throw new Error("method is not implemented");
    this.loadCustomers();
  }

  loadCustomers() {
  this.customerService.get().subscribe(
    data => {
      this.customers = data;
    },
    error => {
      console.error(error);
    }
  );
}


  delete(data:any){
    this.customerService.delete(data._id).subscribe(
      ()=>{
        this.loadCustomers();
      },
      error =>{
        console.error("error==",error)
      }
    )
  }


  
}
