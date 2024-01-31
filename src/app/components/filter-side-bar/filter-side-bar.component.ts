import { Component, EventEmitter, Input, Output } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.css']
})
export class FilterSideBarComponent {
  @Input() categoriesToDisplay!: string[];
  checkedCategories: string[] = [];
  @Output() categoriesToFilter = new EventEmitter<string[]>();
  
  onCheckCategories(event: any) {
  const target = event.target as HTMLInputElement;
    //  * Lorsqu'un user coche une checkbox
    //  * -> On l'ajoute à une tableau de catégorie cochée
if (target.checked) {
  if (this.checkedCategories.length === this.categoriesToDisplay.length){
    this.checkedCategories=[];
  }
this.checkedCategories.push(target.value);
// this.checkedCategories = [...new Set(this.checkedCategories)]
}
    //  * Lorqu'aucune catégorie n'est coché 
    //  * -> On met toute les catégorie par défaut
else {
  this.checkedCategories = this.checkedCategories.filter(
    (categorie) => categorie !== target.value
  );
  if(this.checkedCategories.length === 0){
    this.checkedCategories = [...this.categoriesToDisplay];
  }
}
    // * Et que c'est la première coche 
    //  * -> On doit d'abord vider notre tableau

      // Si c'est la première coche après avoir tout décoché, vider le tableau
 
    
    // * Lorsqu'un user décoche une checkbox
    //  * -> On la retire du tableau de catégorie cochée
     
 this.categoriesToFilter.emit(this.checkedCategories);
  }
}
