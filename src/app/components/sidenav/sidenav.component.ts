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
    {title:"home",route:"/home"},
    {title:"sell",route:"/post-ad"},
    {title:"posts",route:"#"},
    {title:"cart",route:"#"},
    // {title:"",route:"#"},
    {title:"Chat",route:"#"},
    {title:'profile',route:"#"},
  ]
}
