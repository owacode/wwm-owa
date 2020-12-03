import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Speakers } from 'src/app/shared/data/speakers';
import { Tracks } from 'src/app/shared/data/tracks';
import { TrackMaps } from 'src/app/shared/data/tracks-map';
import { UIFunctions } from 'src/app/shared/functions/ui';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.scss']
})
export class TrackPageComponent implements OnInit {

  speakers: any = [];
  trackTitle = '';
  trackContent: any;
  trackIndex:number = 0;
  currentSpeaker:any;

  constructor(public speakersData: Speakers, public route: ActivatedRoute, public trackMaps: TrackMaps, public tracksData: Tracks, public ui:UIFunctions) { }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      console.log(res.type);

      this.trackIndex = this.trackMaps.map.findIndex((el) => {
        return res.type == el.url;
      })

      this.trackTitle = this.trackMaps.map[this.trackIndex].title;
      this.trackContent = this.tracksData.data[this.trackIndex];
      this.speakers = this.speakersData.data[this.trackIndex];
    });
  }

  openSpeakerModal(speaker:any){
    this.currentSpeaker = speaker;
    this.ui.openModal('#speakerModal');
  }

}
