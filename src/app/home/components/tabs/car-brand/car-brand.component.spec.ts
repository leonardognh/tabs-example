import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBrandComponent } from './car-brand.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

describe('CarBrandComponent', () => {
  let component: CarBrandComponent;
  let fixture: ComponentFixture<CarBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatCardModule, MatGridListModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #ngOnInit', () => {
    const spy = jest
      .spyOn(component['dataService'], 'getByLabel')
      .mockReturnValue({ tabLabel: 'Tab 1' });

    component.ngOnInit();

    expect(component.active).toEqual('Tab 1');
    expect(spy).toHaveBeenCalled();
  });

  it('should call #save', () => {
    const spy = jest.spyOn(component['dataService'], 'set');

    component.tabLabel = 'Brand 1';

    component.save('Brand 1');

    const model = component['dataService'].getByLabel('Brand 1');

    expect(spy).toHaveBeenCalled();
    expect(component.active).toEqual('Brand 1');
    expect(model).toEqual({ tabLabel: 'Brand 1', obj: 'Brand 1' });
  });

  it('should call #clear', () => {
    const spy = jest.spyOn(component['dataService'], 'remove');

    component.clear();

    const model = component['dataService'].getByLabel('Brand 1');

    expect(spy).toHaveBeenCalled();
    expect(component.active).toEqual('');
    expect(model).toBeUndefined();
  });
});
