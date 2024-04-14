import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-car-color',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  templateUrl: './car-color.component.html',
  styleUrls: ['./car-color.component.scss'],
})
export class CarColorComponent implements OnInit {
  @Input() tabLabel: string = '';
  active: string = '';
  colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black'];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.active = this.dataService.getByLabel(this.tabLabel)?.tabLabel;
  }
  save(color: string) {
    this.active = color;
    this.dataService.set({ tabLabel: this.tabLabel, obj: color });
  }
  clear() {
    this.active = '';
    this.dataService.remove(this.tabLabel);
  }
}
