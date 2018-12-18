import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox/combobox.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ComboboxComponent, FilterSearchComponent],
  declarations: [ComboboxComponent, FilterSearchComponent]
})
export class SharedModule { }
