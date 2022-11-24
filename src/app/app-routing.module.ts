import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    component:PostAdComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'posts',
    component:MyProductsComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
