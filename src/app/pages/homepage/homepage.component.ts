import { Component, OnInit } from '@angular/core';
import { Speakers } from 'src/app/shared/data/speakers';
import { Sponsors } from 'src/app/shared/data/sponsors';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  speakers:any = [];
  sponsors:any = [];
  
  constructor(public speakersData:Speakers, public sponsorsData: Sponsors) { }

  ngOnInit(): void {
    this.speakers = this.speakersData.third;
    this.sponsors = this.sponsorsData.data;
  }


}
