import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {

  @Input() iconName: 
  |'heart' 
  |'heart-fill'
  |'sun' 
  |'sun-fill'
  |'droplet'
  |'droplet-fill' = 'heart';

  iconColor = 'orange';

}
