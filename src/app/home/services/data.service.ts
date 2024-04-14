import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: Data[] = [];

  getAll() {
    return this.data;
  }
  getByLabel(tabLabel: string): Data | undefined {
    return this.data.find((d) => d.tabLabel === tabLabel);
  }
  set(data: Data) {
    this.data.push(data);
  }
  remove(tabLabel: string) {
    this.data = this.data.filter((d) => d.tabLabel !== tabLabel);
  }
  clear() {
    this.data = [];
  }
}
