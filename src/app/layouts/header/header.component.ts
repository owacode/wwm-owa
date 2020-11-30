import { Input,Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() transparent:Boolean = false;
  @Input() hamBlack:Boolean = false;

  
  constructor() {}

  ngOnInit(): void {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 100) {
        $('header').addClass('fixed');
      } else {
        $('header').removeClass('fixed');
      }
    });

    $('.nav-link').click(function() {
      $('#mobile-nav').removeClass('show');
    });
  }

  toggleMenu(){
    console.log("toggle menu");
    $('#mobile-nav').toggleClass('show');
    //$('.ham').toggleClass('show');
  }

}
