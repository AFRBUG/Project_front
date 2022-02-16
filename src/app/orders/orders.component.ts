import { Component, OnInit } from '@angular/core';
import { event } from '../shared/models';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  events:Array<event>=[];
  event:event=new event() ; 
  constructor() { }

  ngOnInit(): void {
  }

}
