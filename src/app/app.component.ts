import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
} from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'wwm-owa-conference';
  transparent: Boolean = false;
  hamBlack: Boolean = true;
  loading:boolean = true;

  constructor(public router: Router) {
    this.checkBG();
    this.loaderToggle();
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

  closeAllModals(){
    $('.modal').removeClass('show');
    $('.modal-overlay').removeClass('show')
  }

  loaderToggle(){
    this.router.events.subscribe((event: Event) => {
      setTimeout(() => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    },100);
    });
  }

}
