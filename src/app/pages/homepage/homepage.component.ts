import { Component, OnInit } from '@angular/core';
import { Speakers } from 'src/app/shared/data/speakers';
import { Sponsors } from 'src/app/shared/data/sponsors';
import { TrackMaps } from 'src/app/shared/data/tracks-map';
import { UIFunctions } from 'src/app/shared/functions/ui';
import { LocationService } from 'src/app/shared/services/location.service';
declare var $:any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  speakers:any = [];
  sponsors:any = [];
  currentSpeaker:any;
  constructor(public speakersData:Speakers, public sponsorsData: Sponsors, public tracks:TrackMaps, public location:LocationService, public ui:UIFunctions) { }

  ngOnInit(): void {
    if(!this.location.country){
      this.location.getLocation().then((res:any) => {
        console.log(res);
        this.location.country = res.countryCode;
        this.getSpeakers();
        this.getSponsors();
      },
      err => {
        console.log(err);
        this.speakers = this.speakersData.data[0];
        this.sponsors = this.sponsorsData.data;
      }
      )
    }
    else{
      this.getSpeakers();
        this.getSponsors();
    }

  }

  getSpeakers(){
    let i = 0;
    while(this.speakers.length < 4){
      this.speakersData.data[i++].forEach(el => {
        if(el.country == this.location.country){
          this.speakers.push(el);
        }
      })
    }
  }

  getSponsors(){
    this.sponsorsData.data.forEach(el => {
      if(el.country == this.location.country){
        this.sponsors.push(el);
      }
    })
  }

  openSpeakerModal(speaker:any){
    this.currentSpeaker = speaker;
    this.ui.openModal('#speakerModal');
  }



}
