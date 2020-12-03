import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorsComponent } from './sponsors.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

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
    LazyLoadImageModule,
    RouterModule.forChild(routes)
  ]
})
export class SponsorsModule { }
