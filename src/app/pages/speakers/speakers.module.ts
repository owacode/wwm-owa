import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers.component';
import { Routes, RouterModule } from '@angular/router';
import { SpeakerModule } from 'src/app/components/speaker/speaker.module';
import { SpeakerModalModule } from 'src/app/components/speaker-modal/speaker-modal.module';

const routes: Routes = [
  {
    path:'',
    component:SpeakersComponent
  }
];

@NgModule({
  declarations: [SpeakersComponent],
  imports: [
    CommonModule,
    SpeakerModule,
    SpeakerModalModule,
    RouterModule.forChild(routes)
  ]
})
export class SpeakersModule { }
