import { Component, OnInit } from '@angular/core';
import { Speakers } from 'src/app/shared/data/speakers';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  constructor(public speakers:Speakers) { }

  ngOnInit(): void {
    
  }

}
