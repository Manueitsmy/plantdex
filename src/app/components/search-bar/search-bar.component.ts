import { query } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
@Output() searchHome = new EventEmitter();

entrySearchBar(eventDepuisHTML: any) {
  this.searchHome.emit(eventDepuisHTML.target.value);
  this.searchHome.emit(query);
  
}
}
