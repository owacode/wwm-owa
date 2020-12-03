import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})

export class LocationService {

    country: any = null;
    constructor(private http: HttpClient) {
        this.getLocation();
    }

    public getLocation() {
        return new Promise((resolve, reject) => {
            this.http.get("http://api.ipify.org/?format=json").subscribe((res:any) => {
                
                 return this.http.get(`http://ip-api.com/json/${res.ip}`).toPromise().then((res: any) =>{
                    this.country = res.countryCode;
                    console.log("country", this.country)
                 resolve(res);
                })
                .catch(err => {
                    this.setLocation();
                    reject(err);
                })
             })
        })
    }

    public setLocation(){
        Swal.fire({
            title: 'Please select your country to get started',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `USA`,
            denyButtonText: `India`,
            allowOutsideClick:false,
            allowEscapeKey: false,
            imageUrl: 'assets/img/icons/planet.svg',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Select Country',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
             this.country = 'USA';
            } else if (result.isDenied) {
                this.country = 'IN';
            }
          })
    }


}  