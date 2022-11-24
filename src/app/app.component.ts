import { AfterViewInit, Component } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import {NgProgressComponent} from 'ngx-progressbar'
import { LoadingService } from './services/loading.service';
import { ViewChild } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;
  title = 'BidShop';
  faAdd = faAdd
  constructor(private loadingService:LoadingService){

  }
  loading$ = this.loadingService.loading$

  ngAfterViewInit(): void {
      this.loading$.subscribe((v:boolean)=>{
      if(v){
        this.progressBar.start()  
      }
      else{
        this.progressBar.complete()
      }
    })  
  }
}
