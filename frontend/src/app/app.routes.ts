import { Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

export const routes: Routes = [
    {
        path:'',
        component: CustomerListComponent
    },
    {
        path:'create',
        component: CustomerCreateComponent
    },    
    {
        path:'details/:id',
        component: CustomerDetailsComponent
    },
    {
        path:'edit/:id',
        component: CustomerEditComponent
    }
];
