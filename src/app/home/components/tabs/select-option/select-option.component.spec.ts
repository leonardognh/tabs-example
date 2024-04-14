import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionComponent } from './select-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CarModelComponent } from '../car-model/car-model.component';

describe('SelectOptionComponent', () => {
  let component: SelectOptionComponent;
  let fixture: ComponentFixture<SelectOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SelectOptionComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectOptionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #ngOnInit', () => {
    const spy = jest.spyOn(component, 'observableChangeSelectedTab');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should check if was selected return true', () => {
    const optionMock = {
      label: 'Model',
      component: CarModelComponent,
      isSelected: true,
    };

    component['helperService'].setSelectedOption(optionMock.label);

    const spyGetOptions = jest
      .spyOn(component['helperService'], 'getOptions')
      .mockReturnValue([optionMock]);

    const result = component.checkIfWasSelected(optionMock);

    expect(spyGetOptions).toHaveBeenCalled();
    expect(result).toEqual(optionMock);
  });
  it('should check if was selected return false', () => {
    const optionMock = {
      label: 'Model',
      component: CarModelComponent,
      isSelected: false,
    };

    const spyGetOptions = jest
      .spyOn(component['helperService'], 'getOptions')
      .mockReturnValue([optionMock]);

    const result = component.checkIfWasSelected(optionMock);

    expect(spyGetOptions).toHaveBeenCalled();
    expect(result).toBeUndefined();
  });

  it('should emit option', () => {
    const option = { label: 'test', isSelected: true };
    component.observableChangeSelectedTab();
    component.optionSelected.setValue(option as any);
    component.option.subscribe((value) => {
      expect(value).toEqual(option);
    });
  });
});
