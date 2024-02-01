import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit{

  plantsToDisplay: Plant[] = [];
  categoriesToSend: string[] = [];
  filteredPlants: Plant[] = [];
  query!:string;
  categories: string[] = [];

  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
    console.log(data);
    this.plantsToDisplay = [...data];
    this.filteredPlants = [...data];
    this.categoriesToSend = this.getCategoriesFromPlants(data);
    });
  }

  getCategoriesFromPlants(plants: Plant[]): string[]{    
    const categoriesArray = plants.map((x) => x.categorie);
    const categorySetUnique = new Set(categoriesArray);
    const categoryArrayUnique = [...categorySetUnique];
    return categoryArrayUnique;    
 }
 filterPlantsByCategories(categories: string[]){
  this.categories = categories;
this.filteredPlants = this.plantsToDisplay.filter((plant) =>
categories.includes(plant.categorie))
this.applyFilters();
 }
 filterPlantsBySearch(query: string) {
  this.query = query;
  this.filteredPlants = this.plantsToDisplay.filter((plant) =>
  plant.nom.toLowerCase().includes(this.query.toLowerCase())
  );
  this.applyFilters();
}

private applyFilters() {
 if (true){
  this.filteredPlants = this.plantsToDisplay.filter((plant) =>
  this.categories.includes(plant.categorie))
 }
if (true){
  this.filteredPlants = this.plantsToDisplay.filter((plant) =>
  plant.nom.toLowerCase().includes(this.query.toLowerCase())
  );
}
}}
