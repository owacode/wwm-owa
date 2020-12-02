import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
                    reject(err);
                })
             })
        })
    }


}  