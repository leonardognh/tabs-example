import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CarBrandComponent } from './components/tabs/car-brand/car-brand.component';
import { CarReviewComponent } from './components/tabs/car-review/car-review.component';
import { HelperService } from './services/helper.service';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatTabsModule,
        TabsComponent,
        CarBrandComponent,
        CarReviewComponent,
      ],
      providers: [HelperService],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call #ngOnInit()', () => {
    const spyOnHelperService = jest
      .spyOn(component['helperService'], 'getTabs')
      .mockReturnValue([{ label: 'Tab 1' }, { label: 'Tab 2' }]);

    component.ngOnInit();

    expect(component.tabs).toEqual([{ label: 'Tab 1' }, { label: 'Tab 2' }]);
    expect(spyOnHelperService).toHaveBeenCalled();
  });
});
