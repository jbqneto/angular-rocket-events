import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VimeComponent } from './components/custom/vime/vime.component';

@NgModule({
  declarations: [ VimeComponent ],
  exports: [ VimeComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CustomModule {}