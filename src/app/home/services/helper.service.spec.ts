import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';
import { CarColorComponent } from '../components/tabs/car-color/car-color.component';
import { CarModelComponent } from '../components/tabs/car-model/car-model.component';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call #getTabs()', () => {
    const tabs = service.getTabs();
    expect(tabs).toEqual([{ label: 'Tab 1' }, { label: 'Tab 2' }]);
  });

  it('should call #getOptions()', () => {
    const options = service.getOptions();
    expect(options).toEqual([
      { label: 'Model', component: CarModelComponent, isSelected: false },
      { label: 'Color', component: CarColorComponent, isSelected: false },
    ]);
  });

  it('should call #setSelectedOption()', () => {
    service.setSelectedOption('Model');
    const options = service.getOptions();
    expect(options).toEqual([
      { label: 'Model', component: CarModelComponent, isSelected: true },
      { label: 'Color', component: CarColorComponent, isSelected: false },
    ]);
  });
});
