import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './room';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'cahotel-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{

  hotelName = 'Canada hotel'
  numberOfRooms = 100
  hideRooms = false;
  selectedRoom!: RoomList;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title = 'Room List'
  roomList: RoomList[] = []

  // Only access/load the first instance/component
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;


  constructor() {}

  ngOnInit(): void {

    console.log(this.headerComponent)
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

  ngDoCheck(): void {
    console.log('on changes is called')
  }

  ngAfterViewInit(): void {
    // console.log(this.headerComponent)
    this.headerComponent.title = "Rooms View"
    // console.log(this.headerChildrenComponent.last.title = 'Last Title')
    // const secondComponent = this.headerChildrenComponent.get(1);
    // if (secondComponent) {
    //   // Now, you can safely access the properties or methods of the second component
    //   secondComponent.title = 'Second Title';
    // }
  }

  ngAfterViewChecked(): void {
    
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List'
  }

  selectRoom(room: RoomList) {
    // console.log(room)
    this.selectedRoom = room
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'http://images.unsplash.com/photo-',
      checkinTime: new Date('13-Sept-2023'),
      checkoutTime: new Date('14-Spet-2023'),
      rating: 4.8
    }

     // this.roomList.push(room)
    this.roomList = [...this.roomList, room]
     // It does not mutate the original roomList array but assigns a new array to the roomList variable.
  }


}
