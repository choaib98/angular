import {Component} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product: any = {
    name: "iPhone X",
    price: 200,
    color: "blue",
    discount: 10,
    stock: 0,
    pImage: "assets/images/IPHONE.jpeg"
  }
  cName: string = "choaib";
  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }

}
