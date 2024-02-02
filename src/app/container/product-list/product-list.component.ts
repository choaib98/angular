import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    products=[
      { id: 1, name: "Laptop", price: 999.99,discount:30,inStock:true, category: "Electronics", imageUrl: "https://i0.wp.com/evotrading.ma/wp-content/uploads/2022/03/pc-portable-acer-swift-3-sf314-42-r8km-ryzen-7-8gb-512go-ssd-nx-hseef-004.jpg?fit=1880%2C1160&quality=89&ssl=1" },
      { id: 2, name: "Headphones", price: 49.99,discount:10,inStock:true,  category: "Electronics", imageUrl: "https://mediazone.ma/uploads/images/products/14627/14627-YXU3SZoo.webp" },
      { id: 3, name: "Backpack", price: 39.99,  category: "Fashion",inStock:false, imageUrl: "https://www.mimco.com.au/ProductImages_Display/zoom/1/21006_36156_73681.jpg" },
      { id: 4, name: "Coffee Maker", price: 79.99,discount:90,inStock:true,  category: "Home Appliances", imageUrl: "https://somethingsbrewing.in/cdn/shop/files/1_5dd07d98-b5d8-4ab9-9130-c23c0831e9e2.png?v=1688453077&width=1100" },
    ];
    totalInStock:number=this.products.filter(p=>p.inStock).length;
    outOfStock:number=this.products.filter(p=>p.inStock===false).length;
    selectedBtnRadio:string='all';
  onChanged(value:string){
    console.log(value);
      this.selectedBtnRadio=value;
  }
  @Input()
  searchText:string='';
}
