import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorsComponent } from './sponsors.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:SponsorsComponent
  }
];

@NgModule({
  declarations: [SponsorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SponsorsModule { }
