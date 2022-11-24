import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
 
  private  _loading = new BehaviorSubject(false)
  loading$ = this._loading.asObservable()
  start() {
    this._loading.next(true)
  }
  end(){
    this._loading.next(false)
  }
  constructor() { }
}
