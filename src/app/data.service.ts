import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  cart = [];
  i=0;
  constructor(private http: Http) { }
  apiUrl = './assets/data.json';
  getData() {
    return this.http.get(this.apiUrl).pipe(map(res => res.json()));
  }
  onAdd(name: string, price: number) {
    this.cart.push({ name: name, price: price });
  }
  getCartItems() {
    return this.cart;
  }
  getTotal() {

    return this.cart.length;
  }
  getTotalPrice() {
    
    for (const iterator of this.cart) {
     this.i += iterator.price;
    }
  
  return this.i;
}}
