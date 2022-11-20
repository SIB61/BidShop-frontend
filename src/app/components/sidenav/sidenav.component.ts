import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  constructor(public router:Router){}
  navs = [
    {title:"Home",route:"/home"},
    {title:"Sell",route:"/post-ad"},
    {title:"Cart",route:"#"},
    {title:"Chat",route:"#"},
    {title:'profile',route:"#"}
  ]
}
