import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox/combobox.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ComboboxComponent],
  declarations: [ComboboxComponent, FilterSearchComponent]
})
export class SharedModule { }
