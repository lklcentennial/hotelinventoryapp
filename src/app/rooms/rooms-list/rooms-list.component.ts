import { Component, Input } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'cahotel-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {

  @Input()rooms: RoomList[] = [];
}
