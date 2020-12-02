import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TrackMaps {
    map =[
        {
            url:'water-and-wastewater',
            title:'Water and Wastewater (One Water Resilience)',
            img:'assets/img/icons/tide.svg'
        },
        {
            url:'women-in-wwm',
            title:'Women in WWM',
            img:'assets/img/icons/female.svg'
        },
        {
            url:'wwm-in-agriculture',
            title:'WWM in Agriculture (Water Reuse)',
            img:'assets/img/icons/sugar-cane.svg'
        },
        {
            url:'wash',
            title:'WASH (Water Sanitation and Hygiene)',
            img:'assets/img/icons/sprinkler.svg'
        },
        {
            url:'solid-waste',
            title:'Solid Waste',
            img:'assets/img/icons/clean.svg'
        },
        {
            url:'resource-recovery-energy',
            title:'Resource Recovery and Energy',
            img:'assets/img/icons/wind-turbine.svg'
        },
        {
            url:'digital-water',
            title:'Digital Water (IT/IoT)',
            img:'assets/img/icons/laptop.svg'
        },
        {
            url:'business-groups',
            title:'Business Groups',
            img:'assets/img/icons/employment.svg'
        },
    ]
}