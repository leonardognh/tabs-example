import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarColorComponent } from './car-color.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

describe('CarColorComponent', () => {
  let component: CarColorComponent;
  let fixture: ComponentFixture<CarColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatCardModule, MatGridListModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarColorComponent);
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

    component.tabLabel = 'Color 1';

    component.save('Color 1');

    const model = component['dataService'].getByLabel('Color 1');

    expect(spy).toHaveBeenCalled();
    expect(component.active).toEqual('Color 1');
    expect(model).toEqual({ tabLabel: 'Color 1', obj: 'Color 1' });
  });

  it('should call #clear', () => {
    const spy = jest.spyOn(component['dataService'], 'remove');

    component.clear();

    const model = component['dataService'].getByLabel('Color 1');

    expect(spy).toHaveBeenCalled();
    expect(component.active).toEqual('');
    expect(model).toBeUndefined();
  });
});
