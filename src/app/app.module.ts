import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SpeakerModule } from './components/speaker/speaker.module';
import { HttpClientModule } from '@angular/common/http';
import { SpeakerModalModule } from './components/speaker-modal/speaker-modal.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,HomepageComponent, FooterComponent, HeaderComponent, LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    SpeakerModule,
    SpeakerModalModule,
    AppRoutingModule,
    HttpClientModule ,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
