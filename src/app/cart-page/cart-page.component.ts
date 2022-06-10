import { CartItem } from './../shared/models/CartItem';
import { Cart } from './../shared/models/Cart';
import { CartService } from './../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;

  constructor(private cartService: CartService) {
    this.setCart();
   }

  ngOnInit(): void {
  }

  removeFromCart(cartItem : CartItem){
    this.cartService.removeFormCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem : CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}
