import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {

  @Input() speaker:any;
  constructor() { }

  ngOnInit(): void {
  }

}
