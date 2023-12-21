import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit{
  isDivDisplayed = false;
  monTitle = 'NON !!!';

  plantsToDisplay: Plant[] = [];

  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
    console.log(data);
    this.plantsToDisplay = [...data];
    });
  }
  displayDiv(){
    this.isDivDisplayed = !this.isDivDisplayed;
  }
}

