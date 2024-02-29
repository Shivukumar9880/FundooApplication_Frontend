import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class DataService {

  private drawerState = new BehaviorSubject(false);
  currentMessage = this.drawerState.asObservable();



  private bookList = new BehaviorSubject([]);
  currentbookItems = this.bookList.asObservable();

  private cartList = new BehaviorSubject([]);
  currentCatyItems = this.cartList.asObservable();
  constructor() { }

  changeDrawerState(state: boolean) {
    this.drawerState.next(state)
  }

 

}
