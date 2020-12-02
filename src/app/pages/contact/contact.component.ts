import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submitted:Boolean = false;
  form = new FormGroup({
    firstname:<FormControl> new FormControl(null, Validators.compose([Validators.required])),
    lastname:<FormControl> new FormControl(null, Validators.compose([Validators.required])),
    email:<FormControl> new FormControl(null, Validators.compose([Validators.required, Validators.email])),
    message:<FormControl> new FormControl(null, Validators.compose([Validators.required]))
  })
  constructor() { }

  ngOnInit(): void {
  }


  submit(){
    this.submitted = true;

    if(this.form.invalid){
      console.log("form invalid")
      return;
    }

    console.log(this.form.value);
  

    this.submitted = false;
  }

}
