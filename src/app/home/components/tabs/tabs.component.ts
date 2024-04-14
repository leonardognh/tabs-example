import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOptionComponent } from './select-option/select-option.component';
import { Option } from '../../models/option';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, SelectOptionComponent],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  optionSelected(tab: Option) {
    this.container.clear();
    if (!tab) return;
    const ref: any = this.container.createComponent(tab.component);
    ref.instance.tabLabel = tab.label;
  }
}
