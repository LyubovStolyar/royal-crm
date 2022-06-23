import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [

{path: 'home-component', component: HomeComponent},
{path: 'customers-component', component: CustomersComponent},
{path: 'orders-component', component: OrdersComponent},
{path: 'products-component', component: ProductsComponent},
{path: 'sign-up.component', component: SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
