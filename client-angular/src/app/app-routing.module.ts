import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SignupComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './core/auth.service';

const routes: Routes = [
  {
      path: '',
      canActivateChild: [AuthService],
      children: [
          { path: 'home-component', component: HomeComponent },
          { path: 'customers-component', component: CustomersComponent },
          { path: 'products-component', component: ProductsComponent },
          { path: 'orders-component', component: OrdersComponent },
      ]
  },
  { path: 'signup-component', component: SignupComponent },
  { path: 'login-component', component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
