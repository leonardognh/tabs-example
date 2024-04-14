import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HelperService } from '../../../services/helper.service';
import { Option } from '../../../models/option';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrl: './select-option.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class SelectOptionComponent implements OnInit {
  options: Option[] = [];
  optionSelected = new FormControl('', Validators.required);
  @Output() option = new EventEmitter<Option>();
  constructor(private helperService: HelperService) {
    this.options = this.helperService.getOptions();
  }
  ngOnInit() {
    this.observableChangeSelectedTab();
  }
  observableChangeSelectedTab() {
    this.optionSelected.valueChanges.subscribe((option: any) => {
      if (option) {
        if (this.checkIfWasSelected(option)) {
          this.optionSelected.setValue('');
          return;
        }
        this.helperService.setSelectedOption(option.label);

        this.option.emit(option);
      }
    });
  }
  checkIfWasSelected(option: Option) {
    return this.helperService
      .getOptions()
      .find((opt) => opt.isSelected && opt.label === option.label);
  }
}
