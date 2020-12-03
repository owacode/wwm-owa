import { Component, OnInit } from '@angular/core';
import { Speakers } from 'src/app/shared/data/speakers';
import { UIFunctions } from 'src/app/shared/functions/ui';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  currentSpeaker:any;

  constructor(public speakers:Speakers,public ui:UIFunctions) { }

  ngOnInit(): void {
    
  }

  openSpeakerModal(speaker:any){
    this.currentSpeaker = speaker;
    this.ui.openModal('#speakerModal');
  }

}
