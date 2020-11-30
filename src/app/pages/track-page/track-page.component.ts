import { Component, OnInit } from '@angular/core';
import { Speakers } from 'src/app/shared/data/speakers';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.scss']
})
export class TrackPageComponent implements OnInit {

  speakers:any = [];
  
  constructor(public speakersData:Speakers) { }

  ngOnInit(): void {
    this.speakers = this.speakersData.third;
  }

}
