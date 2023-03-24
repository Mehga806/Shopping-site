import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any=[]

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartItemsList.subscribe(
      (data)=>{
        console.log(data);
        this.cartItems = data        
      }
    )
  }

}
