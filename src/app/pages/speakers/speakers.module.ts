import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers.component';
import { Routes, RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class SpeakersModule { }
