import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  p = 1;
  datas: [];
  order: string = 'bookId';
  reverse: boolean = false;
  myModel1=true;
  myModel2=true;
  myModel3=true;
  myModel4=true;
  myModel5=true;
  myModel6=true;
  myModel7=true;
  myModel8=true;
  status:'';
 
  constructor(private data: DataService, private orderPipe: OrderPipe) {
   }

  ngOnInit() {
    this.onGet();
  }
  onGet() {
    this.data.getData().subscribe(res => {
      this.datas = res;
    });
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  cartadd(name: string, price: number) {
    this.data.onAdd(name, price);
    // this.loggingService.logStatusChange(accountStatus);

  }
  tog1(){
    this.myModel1=!this.myModel1;
    
  }
  tog2(){
    this.myModel2=!this.myModel2;
 
  }
  tog3(){
    this.myModel3=!this.myModel3;
 
  }
  tog4(){
    this.myModel4=!this.myModel4;

  }
  tog5(){
    this.myModel5=!this.myModel5;
  
  }
  tog6(){
    this.myModel6=!this.myModel6;
  
  }
  tog7(){
    this.myModel7=!this.myModel7;
    
  }
  tog8(){
    this.myModel8=!this.myModel8;

  }
}
