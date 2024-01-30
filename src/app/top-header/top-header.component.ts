import { Component } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {
      title:string="header";
      hid:boolean=true;
      onclick(){
        this.hid=!this.hid;
      }
}
