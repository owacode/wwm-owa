import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorsPlanComponent } from './sponsors-plan.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:SponsorsPlanComponent
  }
];

@NgModule({
  declarations: [SponsorsPlanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SponsorsPlanModule { }
