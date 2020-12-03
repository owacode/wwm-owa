import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackPageComponent } from './track-page.component';
import { Routes, RouterModule } from '@angular/router';
import { SpeakerModule } from 'src/app/components/speaker/speaker.module';
import { SpeakerModalModule } from 'src/app/components/speaker-modal/speaker-modal.module';

const routes: Routes = [
  {
    path:'',
    component:TrackPageComponent
  }
];

@NgModule({
  declarations: [TrackPageComponent],
  imports: [
    CommonModule,
    SpeakerModule,
    SpeakerModalModule,
    RouterModule.forChild(routes)
  ]
})

export class TrackPageModule { }
