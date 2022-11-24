import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PostAdComponent } from './pages/post-ad/post-ad.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
   path:"products/:id",
   component:ProductViewComponent
  },
  {
    path:"post-ad",
    component:PostAdComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'posts',
    component:MyProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'payment',
    component:PaymentComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
