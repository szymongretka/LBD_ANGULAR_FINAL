import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultTrackingRoutingModule } from './default-tracking-routing.module';
import { DefaultComponent } from './default/default.component';
import { HighlightDirective } from '../directives/highlight.directive';


@NgModule({
  declarations: [DefaultComponent, HighlightDirective],
  imports: [
    CommonModule,
    DefaultTrackingRoutingModule
  ],
  exports: [DefaultComponent]
})
export class DefaultTrackingModule { }
