import { Customer } from './../../model/customer.model';
import { Component, inject, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-edit',
  imports: [CommonModule, RouterLink],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css'
})
export class CustomerEditComponent implements OnInit{

    private customerService = inject(CustomerService);
    constructor(
      private route: ActivatedRoute,
    ) {}
  
  ngOnInit(): void {
    this.loadCustomer();
  }
   customer:any;

   loadCustomer() {
      const id = this.route.snapshot.paramMap.get('id') || '';

  this.customerService.getById(id).subscribe(
    data => {
      this.customer = data;
      console.log(this.customer)
    },
    error => {
      console.error(error);
    }
  );
}

}
