import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-car-brand',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  templateUrl: './car-brand.component.html',
  styleUrls: ['./car-brand.component.scss'],
})
export class CarBrandComponent implements OnInit {
  tabLabel: string = 'Brand';
  active: string = '';
  brands = ['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Volvo'];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.active = this.dataService.getByLabel(this.tabLabel)?.tabLabel;
  }
  save(brand: string) {
    this.active = brand;
    this.dataService.set({ tabLabel: this.tabLabel, obj: brand });
  }
  clear() {
    this.active = '';
    this.dataService.remove(this.tabLabel);
  }
}
