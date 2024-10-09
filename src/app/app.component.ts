import { Component } from '@angular/core';
import { Auto } from './auto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showroom-auto';

  autoList: Auto[] = [
    { marque: 'bako', modele: 'smart', prix: 15000, puissance: 1, photo: 'bako.png', disponibles: 5 },
    { marque: 'bmw', modele: 'E35', prix: 85000, puissance: 200, photo: 'bmw.png', disponibles: 3 },
    { marque: 'kia', modele: 'rio', prix: 58000, puissance: 12, photo: 'kiaRio.png', disponibles: 3 },
    { marque: 'wallyscar', modele: 'm32', prix: 30000, puissance: 4, photo: 'wallyscar.png', disponibles: 3 },
  ];

  selectedAuto: Auto | null = null;

  updateAuto(filteredAutos: Auto[]) {
    if (filteredAutos.length > 0) {
        this.selectedAuto = filteredAutos[0];
    } else {
        this.selectedAuto = null;
    }
}

}
