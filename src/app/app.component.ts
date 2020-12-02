import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'wwm-owa-conference';
  transparent: Boolean = false;
  hamBlack: Boolean = true;

  constructor(public router: Router) {
    this.checkBG();
  }

  ngOnInit(): void {
     this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  checkBG() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'] == '/sponsor-plans') {this.transparent = true;}
        else{
          this.transparent = false;
        }
        if(event['url'] == '/' || event['url'] == '/sponsor-plans') {this.hamBlack = true;}
        else{ this.hamBlack = false;}
      }
    });
  }

}
