import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'speakers',
    loadChildren: () => import('./pages/speakers/speakers.module').then(m => m.SpeakersModule)
  },
  {
    path:'track/:type',
    loadChildren: () => import('./pages/track-page/track-page.module').then(m => m.TrackPageModule)
  },
  {
    path:'sponsors',
    loadChildren: () => import('./pages/sponsors/sponsors.module').then(m => m.SponsorsModule)
  },
  {
    path:'committees',
    loadChildren: () => import('./pages/committees/committees.module').then(m => m.CommitteesModule)
  },
  {
    path:'sponsor-plans',
    loadChildren: () => import('./pages/sponsors-plan/sponsors-plan.module').then(m => m.SponsorsPlanModule)
  },
  {
    path:'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:'**',
    redirectTo:'/',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
