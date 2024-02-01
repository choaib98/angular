import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  selectedText: string = "";

  @Output()
  changedText : EventEmitter<string> = new EventEmitter<string>();

  search() {
    // Handle the form submission logic here, for example, navigate to a search results page
    console.log("Searching for:", this.selectedText);
    // You can implement further logic like navigating to a search results page or fetching data.
  }
}
