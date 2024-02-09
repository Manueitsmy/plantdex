import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {

  /*TODO @Input to set icon name
<app-icon [iconName]="'sun-fill'"></app-icon>
I wan to dispaliye an icon with a filled sun

Steps : 
1- Install bootstrap icon library => done
2- Inlude icon's CSS file into your Angular project => done
3- Test if it working with this example :
<i class="bi-alarm"></i>

4- Adapt to use the @Input value and replace the class

*/
@Input() iconName: string = ''; 



}
