import { Component } from '@angular/core';
import { faBagShopping, faBasketShopping, faCartShopping, faPerson, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import {faMessage,faUser,faBell} from '@fortawesome/free-regular-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent {
  constructor(private router:Router){
   console.warn(router.url)        
  }

  navList = [
    {title:"home",route:"/home"},
    {title:"sell",route:"/post-ad"},
    {title:"posts",route:"/posts"},
    {title:"cart",route:"/cart"},
    {title:"About Us",route:"/about-us"},
    {title:"payment",route:"/payment"},
    // {title:"",route:"#"},
    // {title:"Chat",route:"#"},
    // {title:'profile',route:"#"},
  ]
  nv = () => this.navList.find((v:any)=>v.route === this.router.url)? this.navList.find((v:any)=>v.route === this.router.url):{title:"Product"}

faCart = faShoppingCart
faProfile = faUser
faChat = faMessage 
  faNotification = faBell
loggedIn = localStorage.getItem('token')
}
