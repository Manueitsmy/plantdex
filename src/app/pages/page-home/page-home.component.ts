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
  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
    console.log(data);
    this.plantsToDisplay = [...data];
    this.filteredPlants = [...data];
    this.categoriesToSend = this.getCategoriesFromPlants(data);
    // console.log(this.getCategoriesFromPlants(this.plantsToDisplay));
    });
  }

  getCategoriesFromPlants(plants: Plant[]): string[]{    
    const categoriesArray = plants.map((x) => x.categorie);
    const categorySetUnique = new Set(categoriesArray);
    const categoryArrayUnique = [...categorySetUnique];
    return categoryArrayUnique;    
 }
 filterPlantsByCategories(categories: string[]){
// Implémentation du filtre des plantes en fonction de leur catégorie
this.filteredPlants = this.plantsToDisplay.filter((plant) =>
categories.includes(plant.categorie))
 }
 filterPlantsBySearch(query: any) {
  this.filteredPlants = this.plantsToDisplay.filter((plant) =>
  plant.nom.toLowerCase().includes(query.toLowerCase())
  );
}}