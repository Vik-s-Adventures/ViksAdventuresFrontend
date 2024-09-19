import { Component } from '@angular/core';


@Component({
  selector: 'app-maps-page',
  templateUrl: './maps-page.component.html',
  styleUrls: ['./maps-page.component.css']
})
export class MapsPageComponent {
  images = [
    'mercado.png',
    'src/assets/images/laboratorio.png',
    'src/assets/images/fantasia.png',
    'src/assets/images/espacial.png'
  ];

}
