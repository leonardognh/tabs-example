import { Type } from '@angular/core';

export interface Tab {
  label: string;
  fixedComponent?: Type<unknown>;
}
