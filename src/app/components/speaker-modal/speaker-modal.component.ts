import { Component, Input, OnInit } from '@angular/core';
import { UIFunctions } from 'src/app/shared/functions/ui';

@Component({
  selector: 'speaker-modal',
  templateUrl: './speaker-modal.component.html',
  styleUrls: ['./speaker-modal.component.scss']
})
export class SpeakerModalComponent implements OnInit {

  @Input() speaker:any;

  constructor(public ui:UIFunctions) { }

  ngOnInit(): void {
  }

}
