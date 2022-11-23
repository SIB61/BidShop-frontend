import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
