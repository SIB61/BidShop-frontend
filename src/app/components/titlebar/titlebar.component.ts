import { Component } from '@angular/core';
import { faBagShopping, faBasketShopping, faCartShopping, faPerson, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import {faMessage,faUser,faBell} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent {
faCart = faShoppingCart
faProfile = faUser
faChat = faMessage 
  faNotification = faBell
loggedIn = localStorage.getItem('token')
}
