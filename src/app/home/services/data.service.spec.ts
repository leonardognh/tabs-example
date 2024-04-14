import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call #getAll without data', () => {
    const data = service.getAll();
    expect(data).toEqual([]);
  });
  it('should call #getAll with data', () => {
    service.set({ tabLabel: 'Tab 1' });
    const data = service.getAll();
    expect(data).toEqual([{ tabLabel: 'Tab 1' }]);
  });

  it('should call #getByLabel', () => {
    service.set({ tabLabel: 'Tab 1' });
    const data = service.getByLabel('Tab 1');
    expect(data).toEqual({ tabLabel: 'Tab 1' });
  });

  it('should call #set', () => {
    service.set({ tabLabel: 'Tab 1' });
    const data = service.getAll();
    expect(data).toEqual([{ tabLabel: 'Tab 1' }]);
  });

  it('should call #remove', () => {
    service.set({ tabLabel: 'Tab 1' });
    service.remove('Tab 1');
    const data = service.getAll();
    expect(data).toEqual([]);
  });

  it('should call #clear', () => {
    service.set({ tabLabel: 'Tab 1' });
    service.clear();
    const data = service.getAll();
    expect(data).toEqual([]);
  });
});
