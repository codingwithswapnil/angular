import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../Products';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  products: any;
  @Input()
  no: number;
  @Input()
  items: any;

  @Output()
  newNo: EventEmitter<number> = new EventEmitter<number>;
  @Output()
  newItems: EventEmitter<any> = new EventEmitter<any>;

  constructor() {

    // this.products = new Products();
    // this.items = this.products.items;
    
    // this.items = [{
    //   product: 'Tea',
    //   quantity: 0
    // }, {
    //   product: 'Coffee',
    //   quantity: 0
    // }
    // ];
  }

  increase() {
    this.no++;
    this.newNo.emit(this.no);
  }

  increaseProducts(event, i) {
    this.items[i].quantity++;
    this.newItems.emit(this.items[i].quantity);
  }

  ngOnInit() {
  }
}
  