import { Input,Component, OnInit } from '@angular/core';
import { TrackMaps } from 'src/app/shared/data/tracks-map';
import { LocationService } from 'src/app/shared/services/location.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() transparent:Boolean = false;
  @Input() hamBlack:Boolean = false;

  registrationLink = '';

  constructor(public tracks:TrackMaps, public location:LocationService) {}

  ngOnInit(): void {

    

    $(window).scroll(function() {
      if ($(window).scrollTop() >= 100) {
        $('header').addClass('fixed');
      } else {
        $('header').removeClass('fixed');
      }
    });


    $(".nav-link-mobile").click(this.toggleMenu);


    $(document).mouseup((e:MouseEvent) => {
      if ((!$('.country-btn').is(e.target) // if the target of the click isn't the container...
      && $('.country-btn').has(e.target).length === 0)
     &&
      (!$('.country-dropdown').is(e.target) // if the target of the click isn't the container...
      && $('.country-dropdown').has(e.target).length === 0)
      ) // ... nor a descendant of the container
      {
        $('.country-dropdown').removeClass('show');
     }
    });


  }

  toggleMenu(){
    console.log("toggle menu");
    $('#mobile-nav').toggleClass('show');
    //$('.ham').toggleClass('show');
  }

  toggleDropdown(){
    $('.country-dropdown').toggleClass('show');
  }

  toggleCountry(){
    if( $("#customToggle").is(':checked')){
      $('#toggleOnText').addClass('active');
      $('#toggleOffText').removeClass('active');
      this.location.country = "IN";
    }
    else{
      $('#toggleOffText').addClass('active');
      $('#toggleOnText').removeClass('active');
      this.location.country = "US";
    }
  }

}
