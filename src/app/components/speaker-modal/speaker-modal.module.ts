import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerModalComponent } from './speaker-modal.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [SpeakerModalComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports:[SpeakerModalComponent]
})

export class SpeakerModalModule { }
