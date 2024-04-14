import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-car-model',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss'],
})
export class CarModelComponent implements OnInit {
  @Input() tabLabel: string = '';
  active: string = '';
  models = ['Model 1', 'Model 2', 'Model 3', 'Model 4', 'Model 5'];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.active = this.dataService.getByLabel(this.tabLabel)?.tabLabel;
  }
  save(model: string) {
    this.active = model;
    this.dataService.set({ tabLabel: this.tabLabel, obj: model });
  }
  clear() {
    this.active = '';
    this.dataService.remove(this.tabLabel);
  }
}
