import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {

  @Input() speaker:any;
  @Output() signalModal = new EventEmitter;
  constructor() { }

  ngOnInit(): void {

  }

  openModal(){
    this.signalModal.emit(this.speaker);
  }

}
