import { Component, OnInit,inject } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms'; 
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-create',
  imports: [RouterModule,FormsModule],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.css'
})
export class CustomerCreateComponent implements OnInit{
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

      private customerService = inject(CustomerService);

  onSubmit(contactForm:any) {
    console.log(contactForm.value);

    this.customerService.post(contactForm.value).subscribe(
    data => {
      
      console.log("successss",data)
    },
    error => {
      console.error(error);
    }
  );
  }
}
