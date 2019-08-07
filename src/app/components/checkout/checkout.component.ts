import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
t:number;
t2:number;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.cartitem();
    this.cartitemtotal();
  }
  cartitem(){
   this.t=  this.data.getTotal();
   return this.t;
  }
  cartitemtotal(){
    this.t2=  this.data.getTotalPrice();
    return this.t2;
  }
}
