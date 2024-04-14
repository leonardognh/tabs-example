import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarModelComponent } from './car-model.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

describe('CarModelComponent', () => {
  let component: CarModelComponent;
  let fixture: ComponentFixture<CarModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatCardModule, MatGridListModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarModelComponent);
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

    component.tabLabel = 'Model 1';

    component.save('Model 1');

    const model = component['dataService'].getByLabel('Model 1');

    expect(spy).toHaveBeenCalled();
    expect(component.active).toEqual('Model 1');
    expect(model).toEqual({ tabLabel: 'Model 1', obj: 'Model 1' });
  });

  it('should call #clear', () => {
    const spy = jest.spyOn(component['dataService'], 'remove');

    component.clear();

    const model = component['dataService'].getByLabel('Model 1');

    expect(spy).toHaveBeenCalled();
    expect(component.active).toEqual('');
    expect(model).toBeUndefined();
  });
});
