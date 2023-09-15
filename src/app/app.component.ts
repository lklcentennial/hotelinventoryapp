import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'cahotel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotelinventoryapp';

  role = 'Users'

  @ViewChild('name', {static: true}) name!: ElementRef

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Canada Hotel'
    // this.name.nativeElement
  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.numberOfRooms = 50
  // }

}
