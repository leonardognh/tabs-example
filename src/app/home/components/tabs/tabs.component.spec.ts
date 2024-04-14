import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';
import { CommonModule } from '@angular/common';
import { SelectOptionComponent } from './select-option/select-option.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SelectOptionComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #optionSelected', () => {
    const spyOnContainer = jest.spyOn(component.container, 'clear');
    const spyOnCreateComponent = jest.spyOn(
      component.container,
      'createComponent'
    );
    const tab: any = { label: 'Tab 1', component: {} };

    component.optionSelected(tab);

    expect(spyOnContainer).toHaveBeenCalled();
    expect(spyOnCreateComponent).toHaveBeenCalled();
  });

  it('should call #optionSelected with no tab', () => {
    const spyOnContainer = jest.spyOn(component.container, 'clear');
    const spyOnCreateComponent = jest.spyOn(
      component.container,
      'createComponent'
    );
    const tab: any = null;

    component.optionSelected(tab);

    expect(spyOnContainer).toHaveBeenCalled();
    expect(spyOnCreateComponent).not.toHaveBeenCalled();
  });
});
