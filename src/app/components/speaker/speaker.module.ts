import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerComponent } from './speaker.component';

@NgModule({
  declarations: [SpeakerComponent],
  imports: [
    CommonModule
  ],
  exports:[SpeakerComponent]
})

export class SpeakerModule { }
