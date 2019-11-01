import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { produse } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

   addToCart(produs) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(produs);
  }



  ngOnInit() {
  this.route.paramMap.subscribe(params => {
  this.produs = produse[+params.get('produstId')];
  });
}

}