import { Component, OnInit } from '@angular/core';
import { Sponsors } from 'src/app/shared/data/sponsors';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  sponsors:any = [];
  
  constructor(public sponsorsData: Sponsors) { }

  ngOnInit(): void {
    this.sponsors = this.sponsorsData.data;
  }

}
