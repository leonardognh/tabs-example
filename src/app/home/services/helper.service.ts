import { Injectable } from '@angular/core';
import { Option } from '../models/option';
import { CarColorComponent } from '../components/tabs/car-color/car-color.component';
import { CarModelComponent } from '../components/tabs/car-model/car-model.component';
import { Tab } from '../models/tab';
@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private tabs: Tab[] = [{ label: 'Tab 1' }, { label: 'Tab 2' }];
  private options: Option[] = [
    { label: 'Model', component: CarModelComponent, isSelected: false },
    { label: 'Color', component: CarColorComponent, isSelected: false },
  ];
  getTabs() {
    return this.tabs;
  }
  getOptions() {
    return this.options;
  }
  setSelectedOption(label: string) {
    this.options.map((option) => {
      option.isSelected = option.label === label;
      return option;
    });
  }
}
