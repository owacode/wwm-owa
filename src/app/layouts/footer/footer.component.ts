import { Component, OnInit } from '@angular/core';
import { TrackMaps } from 'src/app/shared/data/tracks-map';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public tracks: TrackMaps) { }

  ngOnInit(): void {
  }
}
