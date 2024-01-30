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
    stock: 3,
    pImage: "assets/images/IPHONE.jpeg"
  }
  cName: string = "choaib";
  counter:number=0;
  list:string[]=['choaib','youssef','zoubir'];
  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }
  onNameChange(event:any){
      this.cName=event.target.value;
  }

  add() {
    if(this.product.stock>this.counter)
    this.counter=this.counter+1;
  }

  min() {
    if(this.counter>0)
    this.counter=this.counter-1;
  }
}
