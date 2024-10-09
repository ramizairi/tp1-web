import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from '../auto';

@Component({
  selector: 'app-search-bar',
  template: `
    <form (ngSubmit)="searchAutoList()" style="display: flex; align-items: center;">
      <h3 style="color: #2ea4b6; margin-right: 20px;">Brand</h3>
      <input
        style="padding: 10px; border-radius: 5px; border-color: #2ea4b6; margin-right: 20px;"
        type="text" placeholder="Enter car brand" [(ngModel)]="carBrand"
        name="brand" required>
      <button
        style="padding: 10px; width: 100px; background-color: #2ea4b6; border-radius: 5px;"
        type="submit">Search</button>
    </form>

    <div *ngIf="filteredAutos && filteredAutos.length > 0">
      <div *ngFor="let auto of filteredAutos" style="color: #2ea4b6; display: flex; margin-bottom: 20px;">
        <div style="width: 600px;">
          <div style="display: flex; align-items: center;">
            <p style="color: black; font-size: x-large;">{{ auto.modele }}</p>
            <a style="margin-left: 20px; cursor: pointer;" (click)="viewMore(auto)">View more ...</a>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="selectedAuto" style="color: #2ea4b6; display: flex;">
      <div style="width: 600px;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <p style="color: black; font-size: x-large;">{{ selectedAuto.modele }}</p>
          <a style="cursor: pointer;" (click)="backToList()">Back to list</a>
        </div>
        <h3>Marque</h3>
        <hr>
        <h4 style="color: black; text-align: right; font-size: 20px;">{{ selectedAuto.marque }}</h4>
        <h3 style="padding-top: 50px;">Model</h3>
        <hr>
        <h4 style="color: black; text-align: right; font-size: 20px;">{{ selectedAuto.modele }}</h4>
        <h3 style="padding-top: 50px;">Price</h3>
        <hr>
        <h4 style="color: black; text-align: right; font-size: 20px;">{{ selectedAuto.prix }}</h4>
        <h3 style="padding-top: 50px;">Power</h3>
        <hr>
        <h4 style="color: black; text-align: right; font-size: 20px;">{{ selectedAuto.puissance }}</h4>
      </div>
      <div>
        <img style="width: 400px; margin-left: 20px; border-radius: 20px;"
          [src]="'assets/photos/' + selectedAuto.photo"
          [alt]="selectedAuto.modele">
      </div>
    </div>
  `,
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() autos: Auto[] = [];
  @Output() selectAutoEvent = new EventEmitter<Auto[]>();

  carBrand: string = '';
  filteredAutos: Auto[] = [];
  selectedAuto: Auto | null = null;

  searchAutoList() {
    console.log('Search initiated for brand:', this.carBrand);
    this.filteredAutos = this.autos.filter(auto => auto.marque.toLowerCase() === this.carBrand.toLowerCase());
    console.log('Filtered Autos:', this.filteredAutos);
    
    if (this.filteredAutos.length > 0) {
      this.selectAutoEvent.emit(this.filteredAutos);
    } else {
      this.selectAutoEvent.emit([]);
    }
    this.selectedAuto = null;
  }

  viewMore(auto: Auto) {
    this.selectedAuto = auto;
  }

  backToList() {
    this.selectedAuto = null;
  }
}