import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
arr:any[];
  constructor(private data: DataService,private route:Router) {
   }

  ngOnInit() {
    this.arr =this.data.getCartItems();
   
  }
  redirect(){
    this.route.navigate([('checkout')]);
  }

}
