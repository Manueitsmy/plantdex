import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
@Output() searchHome = new EventEmitter<string>();

entrySearchBar(eventDepuisHTML: any) {
  this.searchHome.emit(eventDepuisHTML.target.value);
}
}
