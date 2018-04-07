import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './../child/child.component';
import { Products } from '../Products';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  items: any;
  no: number;
  products: any;

  constructor() {
    this.products = new Products();
    this.no = 0;
    this.items = this.products.items;
  }

  increaseProducts(i) {
    this.items[i].quantity++;
  }

  increase() {
    this.no++;
  }

  numberChange(event) {
    this.no = event;
  }

  cartChange(event) {
    // console.log(event);
    // console.log("Before assigning");
    // console.log(this.items);
    // this.items = event;
    // console.log(this.items);
  }

  ngOnInit() {
  }

}
