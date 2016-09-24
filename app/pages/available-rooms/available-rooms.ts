import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';
 
@Component({
  templateUrl: 'build/pages/available-rooms/available-rooms.html',
})
export class AvailableRoomsPage {
 
    rooms: any;
 
    constructor(private nav: NavController, private navParams: NavParams) {
        this.rooms = this.navParams.get('rooms');
    }
 
    bookRoom(room){
        this.nav.push(BookingPage, {
            room: room,
            details: this.navParams.get('details')
        });
    }
 
}