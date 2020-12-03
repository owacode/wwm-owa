import { Injectable } from "@angular/core";
declare var $: any;

@Injectable({
    providedIn: 'root'
})

export class UIFunctions {
    //common dropdown function
    constructor() { }

    openModal(modal: string) {
       var modalRef =  $(modal).addClass('show');
       $('.modal-overlay').addClass('show');
       var modalContent = modalRef.find('.modal-content')
       modalContent.scrollTop(0);
    }

    closeModal(modal: string) {
        $(modal).removeClass('show');
        $('.modal-overlay').removeClass('show')
    }
}