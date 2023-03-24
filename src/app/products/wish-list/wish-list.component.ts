import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishList: any;
  eMsg:string=''

  constructor(private api:ApiService,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getWishlist()
    .subscribe(
      //success response
      (data:any)=>{
        this.wishList = data.result
        if(this.wishList.length==0){
          this.eMsg='empty wishlist'
        }
      },
      //client error
      (data:any)=>{
        this.eMsg = data.error.message
      }
    )
  }
  //deleteFromWishlist

  deleteFromWishlist(product:any){
    this.api.deleteFromWishlist(product.id)
    .subscribe(
      (result:any)=>{
        this.wishList = result.Wishlist
        if(this.wishList.length==0){
          this.eMsg='empty wishlist'
        }
        // if(this.wishList.length==0) {
        //   this.eMsg='empty wishlist'
        // }
        //alert(result.message)
       // window.location.reload(); // method 1 auto refresh
        //method 2
        //this.router.navigateByUrl('wish-list')
      },
      (result:any)=>{
        alert(result.error.message)
      
      }
    )
  }

  //addToCart(product)

  addToCart(product:any){
    this.cart.addToCart(product)
    this.deleteFromWishlist(product)
    
  }


}
