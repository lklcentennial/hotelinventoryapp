import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';

@Component({
  selector: 'cahotel-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Canada hotel'
  numberOfRooms = 100
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = []

  constructor() {}

  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'http://images.unsplash.com/photo-',
      checkinTime: new Date('10-Sept-2023'),
      checkoutTime: new Date('11-Spet-2023'),
      rating: 4.5
    },{
      roomNumber: 2,
      roomType: 'Deluxe Room2',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'http://images.unsplash.com/photo-',
      checkinTime: new Date('11-Sept-2023'),
      checkoutTime: new Date('12-Spet-2023'),
      rating: 345654
    },{
      roomNumber: 3,
      roomType: 'Deluxe Room3',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'http://images.unsplash.com/photo-',
      checkinTime: new Date('13-Sept-2023'),
      checkoutTime: new Date('14-Spet-2023'),
      rating: 2.6
    }]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
