import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { PostAdComponent } from './pages/post-ad/post-ad.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { NgProgressModule } from 'ngx-progressbar';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PaymentComponent } from './pages/payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TitlebarComponent,
    HomeComponent,
    ProductViewComponent,
    PostAdComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    MyProductsComponent,
    AboutUsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgProgressModule
  
  ],
  providers: [NgxImageCompressService,

    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },

    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:CacheInterceptor,
    //   multi:true
    // },

    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoggingInterceptor,
      multi:true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
