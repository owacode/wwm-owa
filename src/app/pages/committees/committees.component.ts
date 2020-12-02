import { Component, OnInit } from '@angular/core';
import { Speakers } from 'src/app/shared/data/speakers';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.scss']
})
export class CommitteesComponent implements OnInit {

  constructor(public speakersData : Speakers) { }

  conferenceMembersTop:any = [];
  conferenceMembersBottom:any= [];

  advisoryMembersTop:any = [];
  advisoryMembersBottom:any = [];

  ngOnInit(): void {
    this.conferenceMembersTop = this.speakersData.data[0].slice(0,4);
    this.conferenceMembersBottom = this.speakersData.data[1];

    this.advisoryMembersTop = this.speakersData.data[7].slice(0,4);
    this.advisoryMembersBottom = this.speakersData.data[7];
  }


}
