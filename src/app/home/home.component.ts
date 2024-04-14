import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TabsComponent } from './components/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HelperService } from './services/helper.service';
import { Tab } from './models/tab';
import { CarBrandComponent } from './components/tabs/car-brand/car-brand.component';
import { CarReviewComponent } from './components/tabs/car-review/car-review.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    TabsComponent,
    CarBrandComponent,
    CarReviewComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabs: Tab[] = [];
  constructor(private helperService: HelperService) {}
  ngOnInit() {
    this.tabs = this.helperService.getTabs();
  }
}
