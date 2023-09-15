import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'cahotel-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, OnDestroy{

  @Input()rooms: RoomList[] = [];
  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>()

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }

  ngOnDestroy(): void {
    console.log('on destroy is called')
  }
}
