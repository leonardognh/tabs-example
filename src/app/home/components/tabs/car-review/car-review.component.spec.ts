import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReviewComponent } from './car-review.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

describe('CarReviewComponent', () => {
  let component: CarReviewComponent;
  let fixture: ComponentFixture<CarReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #ngOnInit', () => {
    const spy = jest
      .spyOn(component['dataService'], 'getAll')
      .mockReturnValue([]);

    component.ngOnInit();

    expect(component.data).toEqual([]);
    expect(spy).toHaveBeenCalled();
  });

  it('should call #clearAll', () => {
    const spy = jest.spyOn(component['dataService'], 'clear');

    component.clearAll();

    const data = component['dataService'].getAll();

    expect(data).toEqual([]);
    expect(component.data).toEqual([]);
    expect(spy).toHaveBeenCalled();
  });
});
