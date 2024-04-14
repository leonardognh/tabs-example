import { Type } from '@angular/core';

export interface Option {
  label: string;
  component: Type<unknown>;
  isSelected: boolean;
}
