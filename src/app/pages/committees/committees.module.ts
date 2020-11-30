import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitteesComponent } from './committees.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:CommitteesComponent
  }
];

@NgModule({
  declarations: [CommitteesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CommitteesModule { }
