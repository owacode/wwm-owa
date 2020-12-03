import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerComponent } from './speaker.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it

@NgModule({
  declarations: [SpeakerComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports:[SpeakerComponent]
})

export class SpeakerModule { }
