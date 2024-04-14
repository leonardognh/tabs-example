import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-car-review',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatButtonModule],
  templateUrl: './car-review.component.html',
  styleUrls: ['./car-review.component.scss'],
})
export class CarReviewComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.data = this.dataService.getAll();
  }
  clearAll() {
    this.data = [];
    this.dataService.clear();
  }
}
